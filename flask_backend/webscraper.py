from flask import Flask, request

from selenium import webdriver
from selenium.webdriver.common.by import By

app = Flask(__name__)

@app.route('/webscrape', methods=['POST'])
def webscrape():
    if request.method == 'POST':
        driver = webdriver.Chrome(executable_path='./chromedriver.exe')
        options = webdriver.ChromeOptions()
        options.add_argument('--enable-javascript')
        options.add_argument('headless')
        
        url = request.get_json()
        driver.get(url)

        title = driver.find_element(By.CLASS_NAME, 'product-name').get_attribute('textContent')
        price = driver.find_element(By.CLASS_NAME, 'regPrice').get_attribute('textContent')
        desc = driver.find_element(By.CLASS_NAME, 'description-text').get_attribute('textContent')
        
        return {'items': [url, title, price, desc]}
    
    else:
        return "Error"

if __name__=='__main__':
    app.run(debug=True)