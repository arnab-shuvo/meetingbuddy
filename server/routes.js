"use strict";
const express = require('express');
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk');
const axios = require('axios').default;
const Text = require("./text");
const deepgramApiKey = '1347b873378522f6f0bde96d191fb52655d81ca9';

const router = express.Router();

router.post('/submit-audio', (req,res)=>{
    const buffer = Buffer.from(
        req.body.audio.split('base64,')[1],  // only use encoded data after "base64,"
    'base64'
    )
    fs.writeFileSync('./audio.webm', buffer)
    const pathToFile = './audio.webm';
    const deepgram = new Deepgram(deepgramApiKey);
    const fileBuffer = fs.readFileSync(pathToFile);

    deepgram.transcription.preRecorded({ 
        buffer: fileBuffer, 
        mimetype: 'audio/webm' // or appropriate mimetype of your file 
      }, {
        punctuate: true,
        version:'latest',
        profanity_filter:true,
        numerals: true,
        ner:true
      })
      .then(async (transcription) => {
        const text = transcription.results.channels[0].alternatives[0].transcript
        let url = 'https://d8d9-35-243-226-164.ngrok.io?wholetext='+text
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }
          }
        const rawResponse = await axios.post(url,config);
        console.log(rawResponse.data[0].summary_text,'=====rawResponse');
        const response = {
            full_text: text,
            summary: rawResponse.data[0].summary_text
        }

        // const text = new Text({
        //     wholeText: transcription.results.channels[0].alternatives[0].transcript,
        //     summary: 'aaaa',
        // });
        // const newText = await text.save();
        return res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err.message);
      })


});

router.post('/submit-meeting', async (req,res)=>{
   
    try {
        const {full_text,summary,title} = req.body
        const text = new Text({
            title: title,
            date: Date.now(),
            wholeText: full_text,
            summary: summary,
        });
        text.save();
        return res.status(200).json({message: 'Success'});
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
   
})

router.get('/all-meeting', async (req,res)=>{
   
    try {
        const allMeeting = await Text.find()
        res.json(allMeeting)
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
   
})

router.get('/get-meeting/:id', async (req,res)=>{
   
    try {
        const mettingDetail = await Text.findById(req.params.id);
        res.json(mettingDetail)
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
   
})


module.exports = router;