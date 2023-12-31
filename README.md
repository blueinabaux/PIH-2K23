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
7. Install the django-tailwind package via pip :
 
```bash
python -m pip install django-tailwind
```

8. Execute the following commands :
```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

```bash
python manage.py runserver
```

9. Open any Web Browser and type in the local url : http://127.0.0.1:8000/

10. After this process you will be able to see the Homepage of our website.

<b>NOTE : THE COMPUTER OR LAPTOP OR ANY LOCAL MACHINE SHOULD BE CONNECTED WITH THE SAME NETWORK AS THAT OF THE MOBILE DEVICE </b>

11. To view the Website on the mobile devices, open the <b>Command Prompt</b> and type <b>ipconfig</b> command.

12. After that find the IPv4 address and copy it.

13. Go to the <b>settings.py</b> file in the PIH folder and line no. 28, there is <b>ALLOWED_HOST</b> written, in that paste the IPv4 address copied earlier in single quotes.

```bash
ALLOWED_HOSTS = ['1.2.3.4']
```
Here we assume that our IPv4 address is '1.2.3.4'

14. After that save the file and run the server. Refer to the following command :

```bash
python manage.py runserver 1.2.3.4:8000
```

Now the Website will run on this address which will allow it to be viewed on the mobile devices.


15. Copy the IPv4 address, paste it in the url of any Web Browser on your mobile device followed by a colon (:) and after that paste the port number (it will be something like : 8000).

 ```bash
1.2.3.4:8000
```

16. Now the Website will be visible on the Moblie device as well.


