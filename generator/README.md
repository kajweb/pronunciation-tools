# generator

# 依赖
`youdao.py`依赖`pywin32`使用时需要先安装：
```
	pip3 install pywin32
```

# 生成依赖
```python
# pip freeze > requirements.txt
# pipreqs ./
pipreqs ./ --encoding=utf8
```

# 安装依赖
```python	
pip install -r requirements.txt
```