# Makefile for dependencies and deployment.
# Copyright 2015 Ralph Giles. GPLv3.

SRCS := index.html glyph.js glyph.css Akkadian.ttf

all: $(SRCS)

Akkadian.ttf: Akkadian.zip
	unzip $<
	# bump the date so we don't run this rule every time.
	touch $@

Akkadian.zip:
	curl -sO http://users.teilar.gr/~g1951d/Akkadian.zip
