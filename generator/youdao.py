from bs4 import BeautifulSoup
import urllib.request
import json
import win32clipboard as w 
import win32con 

# 解析有道词典


def getVoice( data ):
	return "http://dict.youdao.com/dictvoice?audio={}".format(data);

def youdao( word ):
	url = "http://www.youdao.com/w/{}".format(word)
	# 发送请求，得到响应
	content = urllib.request.urlopen(url).read().decode('utf8')
	# 解析内容
	soup = BeautifulSoup(content, 'lxml')
	# 判断单词是否存在todo
	result = {};
	result['word'] = soup.select(".keyword")[0].get_text()
	pronounces = soup.select(".pronounce");

	for item in pronounces:
		types = item.find("a").attrs['data-4log'];
		rel = item.find("a").attrs['data-rel'];
		phonetic = item.select(".phonetic");
		# 处理音标
		if( phonetic ):
			_phonetic = phonetic[0].get_text();
		else:
			_phonetic = "暂无音标";
		# 根据类型处理
		if types == "dict.basic.ec.uk.voice":
			# 英式发音
			result['en'] = _phonetic
			result['en_video'] = getVoice(rel);
		elif types == "dict.basic.ec.us.voice":
			# 美式发音
			result['us'] = _phonetic
			result['us_video'] = getVoice(rel);
		elif types == "dict.basic.ec.voice":
			result['mixed'] = _phonetic
			result['mixed_video'] = getVoice(rel);
			# 机器合成音
		else:
			print("解析错误");
			exit(0);
	# 显示全部
	result['explain'] = soup.select("#phrsListTab > div > ul")[0].get_text();
	# 显示部分
	# result['explain'] = soup.select("#phrsListTab > div > ul > li")[0].get_text();
	jsonD = json.dumps(result, indent=4, ensure_ascii=False);
	return jsonD;

def setText(aString):
	#写入剪切板  
    w.OpenClipboard()  
    w.EmptyClipboard()  
    # w.SetClipboardText(aString)
    w.SetClipboardData(win32con.CF_UNICODETEXT, aString)  
    w.CloseClipboard()

while True:
	word = input("(有道)请输入单词：");
	result = youdao(word);
	setText( result );
	print( "\n",result,"\n" );