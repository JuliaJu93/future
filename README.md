Для запуска приложения в среде Docker:
1) Введите команду в директории с проектом:
```docker build -t webapp .```
2) Затем команду:
```docker run -it --rm -p 3000:3000 webapp```
3) Откройте ссылку в браузере:
```http://localhost:3000```