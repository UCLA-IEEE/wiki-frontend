HOST_USERNAME=ieeebrui
HOST=server187.web-hosting.com

deploy:
	rm -rf dist
	npm run build
	ssh ${HOST_USERNAME}@${HOST} -p 21098 "cd ~/public_html/wiki && rm *.css *.map *.png *.js"
	scp -r -P 21098 ./dist/* ${HOST_USERNAME}@${HOST}:~/public_html/wiki/.

clean:
	rm -rf dist .cache
