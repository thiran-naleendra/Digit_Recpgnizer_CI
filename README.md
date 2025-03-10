# **Digit Recognizer - CI**

Welcome to the **Digit Recognizer** project! This project aims to predict handwritten digits using a trained machine learning model with Flask as the backend and a simple HTML frontend for image uploads.

## **Configuration Need:**

1. **Python Installation**:
   - Ensure you have **Python** installed on your machine. If not, download it from the official [Python website](https://www.python.org/downloads/).

2. **Create a Virtual Environment**:
   - A virtual environment will help you manage the dependencies for this project. To create a virtual environment, run:
     ```bash
     python -m venv venv
     ```

3. **Install Dependencies**:
   - Install the required Python packages listed in the `requirements.txt` file using `pip`:
     ```bash
     pip install -r requirements.txt
     ```

---

## **Setup Project:**

### 1. **Clone the Project Repository**:
   - Open your terminal or command prompt and clone the repository:
     ```bash
     git clone https://github.com/thiran-naleendra/Digit_Recpgnizer_CI
     ```

### 2. **Create a Virtual Environment**:
   - Navigate to the cloned project folder and create a virtual environment:
     ```bash
     python -m venv venv
     ```

### 3. **Activate the Virtual Environment**:
   - Activate the virtual environment to isolate the project dependencies:
     - **Windows**:
       ```bash
       venv\Scripts\activate
       ```
     - **macOS/Linux**:
       ```bash
       source venv/bin/activate
       ```

### 4. **Install Dependencies**:
   - Install the necessary Python packages from the `requirements.txt` file:
     ```bash
     pip install -r requirements.txt
     ```

### 5. **Run the Application**:
   - Set the Flask app environment variable and run the application:
     - **Windows**:
       ```bash
       set FLASK_APP=run.py
       python -m flask run
       ```

     - **macOS/Linux**:
       ```bash
       export FLASK_APP="run.py"
       python -m flask run
       ```

   - After running the above commands, the Flask application will be available at `http://127.0.0.1:5000/` on your local machine.

---

## **Project Structure:**

Here is the structure of the project to help you understand how the files are organized:


### **Explanation**:
- **static/**: Contains static files like JavaScript, CSS, and images.
- **templates/**: Contains the HTML templates (e.g., `index.html`) for rendering the frontend UI.
- **test_data/**: Contains sample test images (can be used for testing the model).
- **venv/**: The virtual environment where dependencies are installed.
- **digit_recognizer.h5**: The trained TensorFlow model for digit prediction.
- **predict.py**: Script to load the model and predict digits from images.
- **route.py**: Contains the Flask routes for backend logic.
- **run.py**: The entry point for running the Flask application.
- **utility.py**: Utility functions for image processing or other tasks (optional).
- **requirements.txt**: Contains all the Python dependencies used in the project.

---

## **How to Contribute:**

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request to merge your changes.

---

## **Additional Notes:**

- The **Flask** backend handles the logic for receiving image uploads, running predictions, and returning the results.
- The **TensorFlow** model (`digit_recognizer.h5`) is used for recognizing handwritten digits (0-9).
- **JavaScript** in the frontend (`script.js`) ensures that the user experience is smooth by dynamically displaying the prediction results.
- The application is designed to be responsive and works on both desktop and mobile devices.

---

### **Happy Coding!** ✨


