#!/usr/bin/env bash

pname="mapi-eu-proxy01"
host=proxer@mapi-eu.dev.ishqbb.com
ssh -D 7771 -M -S /tmp/$pname -fnNT $host
cmd.exe /C launch-chrome-mapi-eu-proxy.bat
ssh -S /tmp/$pname -O exit $host