# Named Entity Recognition (NER) using Flask

This project is part of **CampusX – Week 5**, where I learned how to build a simple **Named Entity Recognition (NER)** web application using **Python, NLP, and Flask**.

The application takes text as input and identifies important entities such as **People, Organizations, Locations, Dates, and other named entities**.

---

## 📌 What is Named Entity Recognition?

**Named Entity Recognition (NER)** is an NLP technique used to identify and classify named entities in a text.

For example:

```text
Barack Obama was born in Hawaii and served as the President of the United States.
```

NER can identify:

```text
Barack Obama → PERSON
Hawaii → GPE
United States → GPE
```

NER is widely used in:

* Information Extraction
* Search Engines
* Chatbots
* Question Answering Systems
* Text Classification
* Document Processing
* Recommendation Systems

---

## 🛠️ Technologies Used

* **Python**
* **Flask**
* **spaCy**
* **HTML**
* **CSS**
* **Jinja2**
* **NLP**

---

## 📂 Project Structure

```text
NER-Flask/
│
├── app.py
├── templates/
│   └── index.html
│
├── static/
│   └── style.css
│
├── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd NER-Flask
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate the environment:

**Windows:**

```bash
venv\Scripts\activate
```

**Linux/macOS:**

```bash
source venv/bin/activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

Install the spaCy English model:

```bash
python -m spacy download en_core_web_sm
```

---

## ▶️ Running the Application

Start the Flask application:

```bash
python app.py
```

The application will run locally at:

```text
http://127.0.0.1:5000/
```

Open the URL in your browser.

---

## 🔄 How the Application Works

The basic workflow is:

```text
User enters text
       ↓
Flask receives the text
       ↓
spaCy NLP model processes the text
       ↓
NER identifies entities
       ↓
Entities are displayed on the webpage
```

---

## 🧠 Example

### Input

```text
Elon Musk founded SpaceX in the United States.
```

### Output

| Entity        | Type   |
| ------------- | ------ |
| Elon Musk     | PERSON |
| SpaceX        | ORG    |
| United States | GPE    |

---

## 📚 What I Learned

Through this project, I learned:

* Basics of **Named Entity Recognition**
* How NER works in NLP
* Using **spaCy** for NLP tasks
* Creating a web application using **Flask**
* Handling user input with Flask
* Connecting Python backend with HTML templates
* Using **Jinja2** for dynamic content
* Creating routes in Flask
* Understanding the basic structure of a Flask project

---

## 🚀 Future Improvements

Some possible improvements are:

* Add more NLP models
* Highlight entities with different colors
* Support multiple languages
* Add entity filtering
* Upload and process `.txt` files
* Add a REST API
* Deploy the application online

---

## 👨‍💻 Learning Source

This project was developed as part of the **CampusX Data Science / NLP learning series – Week 5**, focusing on **Web Development using Flask**.

---

## 📄 License

This project is created for **learning and educational purposes**.
