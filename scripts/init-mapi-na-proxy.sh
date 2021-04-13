#!/usr/bin/env bash

pname="mapi-na-proxy01"
host=proxer@mapi-na.dev.ishqbb.com
ssh -D 9990 -M -S /tmp/$pname -fnNT $host
cmd.exe /C launch-chrome-mapi-na-proxy.bat
ssh -S /tmp/$pname -O exit $host
