default: run

run: install
	npm start

install:
	npm i

clean:
	rm -rf ./node_modules

help:
	"make file for running the application"
	"default = target runs the application"
	"clean = removes the node_modules"
	"install = installs dependencies"