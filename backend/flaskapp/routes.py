from app import app
import secrets
import os
from flask import render_template, url_for, flash, redirect, request

from flaskapp import app, db, bcrypt
from flaskapp.forms import RegistrationForm, LoginForm, InfoForm
from flaskapp.models import User, Profile, Review
from flask_login import login_user, current_user, logout_user, login_required





'''
Page rendering
'''

@app.route('/', methods=['GET'])
def index():
  return render_template('index.html')

@app.route('/sign-up', methods=['GET'])
def signUp():
  return render_template('index.html')

@app.route('/calendar', methods=['GET'])
def calendar():
  return render_template('index.html')

@app.route('/reviews', methods=['GET'])
def reviews():
  return render_template('index.html')

'''
Landing page  
'''
# Sample Data
mentor = [
    {
        'name': '서달미',
        'title': '삼산텍 CEO',
        'job_content': '채용, 투자유치, IR등'
    },
    {
        'name': '남도산',
        'title': '삼산텍 CTO',
        'job_content': '기술 및 개발 총괄 리드'
    }
]

@app.route('/api/recommendations/sample', methods=['GET'])
def landing():

  return render_template('landing.html', mentor=mentor)



# @app.route('/api/recommendations?user_id=12389752179', methods=['GET'])
# def reviews():
#   return render_template('index.html')

'''
Sign up page
'''

@app.route("/api/profile/registration", methods=[ 'GET','POST'])
def registration():
    if current_user.is_authenticated:
        return 'Already Logged In' #redirect(url_for('home'))
    form = RegistrationForm()
    form.validate_username(form.username)
    form.validate_email(form.email)
    if form.validate_on_submit(): #need to change this to validate_on_submit...
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username = form.username.data, email = form.email.data, password = hashed_password)
        db.session.add(user)
        db.session.commit()

        flash(f'Your Account has been created!', 'success')
        return redirect(url_for('info'))
    
    return render_template('register.html', title='Register', form=form)

def save_picture(form_picture):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, 'static/profile_pics', picture_fn)

    output_size = (125, 125)
    i = Image.open(form_picture)
    i.thumbnail(output_size)
    i.save(picture_path)

    return picture_fn

@app.route("/api/profile/info", methods=[ 'GET','POST'])
def info():
    
    form = InfoForm()
    if form.submit(): #need to change this to validate_on_submit...
      if form.picture.data:
        a=1
      else:
        return render_template('info.html', title='Register', form=form)
      image_file = save_picture(form.picture.data)
      user_id = User.query.order_by(User.id.desc()).first() #bring the last added user
      profile = Profile(image_file = form.image_file.data, name = form.name.data, age = form.age.data,
      cell_phone = form.cell_phone.data, school = form.school.data, user_id = user_id)
      db.session.add(profile)
      db.session.commit()

      return redirect(url_for('login'))
  
    return render_template('info.html', title='Register', form=form)

'''
Account Page
'''

@app.route("/account", methods=['GET'])
def account():
  filename = 'profile_pics/profile.png'
  return render_template('account.html', title='Account', filename=filename)
'''
Recommendation page
'''
@app.route('/api/reviews', methods=['GET']) #Kooha
def api_reviews():
  return render_template('index.html')


'''
Login Page: Only For Development Purpose
'''

@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return render_template('logged_in.html', title='Logged_In')
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(url_for('landing')) 
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return  render_template('login.html', title='Login', form=form)

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('login')) 



'''
Testing endpoint
'''


@app.route('/test', methods=['GET'])
def test():
  return 'it works!'

@app.route('/test2', methods=['POST'])
def test2():
  # return 'it works!'
  form = RegistrationForm()
  if form.submit():

    
    hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
    user = User(username = form.username.data, email = form.email.data, password = hashed_password)
    db.session.add(user)
    db.session.commit()
    return user.username
  
  return 'No Return'

'''
Page Not Found
'''

# @app.errorhandler(404)
# def pageNotFound(e):
#   return render_template('index.html')