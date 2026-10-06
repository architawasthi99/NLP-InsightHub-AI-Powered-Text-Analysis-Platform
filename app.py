from flask import Flask, render_template

app=Flask(__name__)


#login route

@app.route("/")
def login():
    return render_template("login.html")


#register route   

@app.route("/register")
def register():
    return render_template("register.html")


#profile route

@app.route("/profile")
def profile():
    return render_template("profile.html")


# ner route
@app.route("/ner")
def ner():
    return render_template("ner.html")


# sentiment route
@app.route("/sentiment")
def sentiment():
    return render_template("sentiment.html")


#abuse route
@app.route("/abuse")
def abuse():
    return render_template("abuse.html")

if __name__=="__main__":
    app.run(debug=True)
