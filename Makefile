# Makefile for dependencies and deployment.
# Copyright 2015 Ralph Giles. GPLv3.

SRCS := index.html glyph.js glyph.css Akkadian.ttf CNAME

all: $(SRCS)

# CNAME file for setting deployment domain.
# Edit this locally to override.
CNAME:
	echo akkad.surge.sh > $@

deploy: $(SRCS)
	-rm -rf _deploy
	mkdir _deploy
	cp $^ _deploy/
	surge _deploy/

Akkadian.ttf: Akkadian.zip
	unzip $<
	# bump the date so we don't run this rule every time.
	touch $@

Akkadian_zip_SHA2 := fd00741c13e0e822a97a6451b1fe406fcdab09f9e4bd77fe6a3eede3d8f5ea61
Akkadian.zip:
	curl -sO http://users.teilar.gr/~g1951d/Akkadian.zip
	SHA2=$(sha256sum $@ | cut -f 1 -d ' ')
	@if test ${SHA2} != $(Akkadian_zip_SHA2); then \
	  echo "Checksum mismatch for $@!;" exit 1; fi
