# news-JS

Run application:  
- Rename `.env.example` to `.env` and set variables with your data  
- Run command in your terminal `npm start`  

# main

Установка последней версии TypeScript:
``` npm install -g typescript ```

``` npm install -D typescript ```

Введите tsc, чтобы убедиться, что TypeScript установлен. 

Вы можете использовать init параметр компилятора TypeScript для создания файла tsconfig.json с параметрами по умолчанию.
``` tsc --init ```

``` npm install ts-loader --save-dev```

https://typescript-eslint.io/getting-started/

``` npm i @typescript-eslint/eslint-plugin ```
``` npm install --save-dev eslint typescript typescript-eslint ```


## dotenv-webpack
dotenv-webpack переносит dotenv и Webpack.DefinePlugin. Таким образом, он выполняет замену текста в результирующем пакете для любых экземпляров process.env.
Ваши .env файлы могут содержать конфиденциальную информацию. Из-за этого dotenv-webpack в вашем конечном пакете будут доступны только переменные среды, на которые явно ссылаются в вашем коде.

