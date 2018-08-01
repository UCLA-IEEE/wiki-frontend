deploy:
	rm -rf dist
	npm run build
	ssh ieeebrui@ieeebruins.com "cd ~/public_html/wiki && rm *.css *.map *.png *.js"
	scp -r ./dist/* ieeebrui@ieeebruins.com:~/public_html/wiki/.
