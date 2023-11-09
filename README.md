# PIH Login and Registration Page

A Responsive Login and Registration Page.

## Installation

1. Clone the repository in your computer devices.
2. Go in Visual Studio Code or any Code editor (IDE) and Open the terminal and type the following commands to create a Virtual Environment.

```bash
python -m venv your_virutal_environment_name
```
Lets assume that the virtual environment in named as - myEnv.
```bash
python -m venv myEnv
```

3. To activate the virtual environment type the following command in the terminal :
```bash
.\myEnv\Scripts\activate
```

4. After activation of the virtual environment, install Django in your machine using the following command :
```bash
pip install django
```
5. Make sure that you are in the directory in which you have cloned the project and also make sure that it contains the <b>manage.py</b>.

6. Install the following commands of crispy-forms, bootstrap5, and Pillow :
```bash
pip install django-crispy-forms
```
```bash
pip install crispy-bootstrap5
```
```bash
pip install Pillow
```
7. Execute the following commands :
```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

```bash
python manage.py runserver
```

8. Open any Web Browser and type in the local url : http://127.0.0.1:8000/

9. After this process you will be able to see the Homepage of our website.

 


