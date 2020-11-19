#!/usr/bin/env python

import sys
import json
import struct
import os

try:
    # Python 3.x version
    # Read a message from stdin and decode it.
    def getMessage():
        rawLength = sys.stdin.buffer.read(4)
        if len(rawLength) == 0:
            sys.exit(0)
        messageLength = struct.unpack('@I', rawLength)[0]
        message = sys.stdin.buffer.read(messageLength).decode('utf-8')
        return json.loads(message)

    # Encode a message for transmission,
    # given its content.
    def encodeMessage(messageContent):
        encodedContent = json.dumps(messageContent).encode('utf-8')
        encodedLength = struct.pack('@I', len(encodedContent))
        return {'length': encodedLength, 'content': encodedContent}

    # Send an encoded message to stdout
    def sendMessage(encodedMessage):
        sys.stdout.buffer.write(encodedMessage['length'])
        sys.stdout.buffer.write(encodedMessage['content'])
        sys.stdout.buffer.flush()

    while True:
        receivedMessage = getMessage()
        action = receivedMessage["action"]
        if action == "list":
            stream = os.popen("./appscmd -j list")
            output = stream.read()
            sendMessage(encodeMessage(output))
        elif action == "install":
            sendMessage(encodeMessage(action))
        elif action == "uninstall":
            manifest = receivedMessage["manifest"]
            if manifest:
                stream = os.popen("./appscmd uninstall " + manifest)
                output = stream.read()
                sendMessage(encodeMessage(output))
        else:
            sendMessage(encodeMessage('{"else": %s}' % receivedMessage))

except AttributeError:
    # Python 2.x version (if sys.stdin.buffer is not defined)
    # Read a message from stdin and decode it.
    def getMessage():
        rawLength = sys.stdin.read(4)
        if len(rawLength) == 0:
            sys.exit(0)
        messageLength = struct.unpack('@I', rawLength)[0]
        message = sys.stdin.read(messageLength)
        return json.loads(message)

    # Encode a message for transmission,
    # given its content.
    def encodeMessage(messageContent):
        encodedContent = json.dumps(messageContent)
        encodedLength = struct.pack('@I', len(encodedContent))
        return {'length': encodedLength, 'content': encodedContent}

    # Send an encoded message to stdout
    def sendMessage(encodedMessage):
        sys.stdout.write(encodedMessage['length'])
        sys.stdout.write(encodedMessage['content'])
        sys.stdout.flush()

    while True:
        receivedMessage = getMessage()
        action = receivedMessage["action"]
        if action == "list":
            stream = os.popen("./appscmd -j list")
            output = stream.read()
            sendMessage(encodeMessage(output))
        elif action == "install":
            # root = Tk()
            # root.directory = tkFileDialog.askdirectory()
            # if root.directory:
            #     cmd = "./appscmd install \"" + root.directory + "\""
            #     stream = os.popen(cmd)
            #     output = stream.read()
            sendMessage(encodeMessage(action))
        elif action == "uninstall":
            manifest = receivedMessage["manifest"]
            if manifest:
                stream = os.popen("./appscmd uninstall " + manifest)
                output = stream.read()
                sendMessage(encodeMessage(output))
        else:
            sendMessage(encodeMessage('{"else": %s}' % receivedMessage))
