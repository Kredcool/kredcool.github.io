# This makefile contains the following commands to compile my special website
#   	make/make dev              -- runs a continously updating localhost
#       make install               -- installs all requirements to run this project
#       make build                 -- builds the website for use in github pages
#       make deploy                -- deploys to github pages
#	    make test                  -- runs all local tests in ./tests

dev:
	npm run dev

install:
	npm install

build:
	npm run build

deploy:
	npm run deploy

test:
	npm run test -- --coverage
