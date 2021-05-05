from app import app
from flask import render_template, url_for, flash, redirect, request
from flaskapp import app, db, bcrypt
from flaskapp.forms import RegistrationForm, LoginForm
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



'''
Sign up page
'''

@app.route("/api/profile/registration", methods=[ 'POST'])
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
        return  'User Created: \n username: {} \n email: {}'.format(user.username, user.email)  # redirect(url_for('login'))
    
    return 'Either Username or Email already exists'
    #return render_template('index.html', title='Registeration', form=form) # This needs to be updated


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
        return redirect(url_for('home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Login', form=form)

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