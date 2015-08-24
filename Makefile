# Makefile for dependencies and deployment.
# Copyright 2015 Ralph Giles. GPLv3.

SRCS := index.html glyph.js glyph.css \
  Akkadian.ttf NotoSansCuneiform-Regular.ttf \
  CNAME

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
	unzip $< $@
	# bump the date so we don't run this rule every time.
	touch $@

Akkadian_zip_SHA2 := fd00741c13e0e822a97a6451b1fe406fcdab09f9e4bd77fe6a3eede3d8f5ea61
Akkadian.zip:
	curl -sO http://users.teilar.gr/~g1951d/Akkadian.zip
	SHA2=$(shasum -a 256 $@ | cut -f 1 -d ' ')
	@if test ${SHA2} != $(Akkadian_zip_SHA2); then \
	  echo "Checksum mismatch for $@!;" exit 1; fi

NotoSansCuneiform-Regular.ttf: NotoSansCuneiform-unhinted.zip
	unzip $< $@
	# bump the date so we don't run this rule every time.
	touch $@

NotoSansCuneiform_zip_SHA2 := 6eb7b77387c298c8cff328d0d0084d35e5e264352a382e7b3aefb7061beedec0
NotoSansCuneiform-unhinted.zip:
	curl -sO https://noto-website.storage.googleapis.com/pkgs/NotoSansCuneiform-unhinted.zip
	SHA2=$(shasum -a 256 $@ | cut -f 1 -d ' ')
	@if test ${SHA2} != $(NotoSansCuneiform_zip_SHA2); then \
	  echo "Checksum mismatch for $@!;" exit 1; fi
