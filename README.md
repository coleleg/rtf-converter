# rtf-converter

**Link**
[GitHub Pages](https://coleleg.github.io/rtf-converter) 


 # Table of Contents
  * [Description](#description)
  
  * [Usage](#usage)
  
  * [Licenses](#licenses)
  
  * [Questions](#questions)

  ## Description
  This app uses Regex and JavaScript to parse text data from an RTF file and display it in CSV format for the user.  It serves a very specific purpose for one company, but it is likely the technology could be applied to other instances.
  
  ## Usage
  Users can access the webpage for this application at [here](https://coleleg.github.io/rtf-converter).  If you would like to test this application, copy the following string and paste it to the <textarea> on the website:
  
  2021-11-08	15:00:00.0000000	Gravitational 	72.0000	Passed	{\rtf1\ansi\deff0\uc1\ansicpg1252\deftab720{\fonttbl{\f0\fnil\fcharset1 Arial;}{\f1\fnil\fcharset1 Times New Roman;}{\f2\fnil\fcharset2 Wingdings;}{\f3\fnil\fcharset2 Symbol;}}{\colortbl\red0\green0\blue0;\red255\green0\blue0;\red0\green128\blue0;\red0\green0\blue255;\red255\green255\blue0;\red255\green0\blue255;\red128\green0\blue128;\red128\green0\blue0;\red0\green255\blue0;\red0\green255\blue255;\red0\green128\blue128;\red0\green0\blue128;\red255\green255\blue255;\red192\green192\blue192;\red128\green128\blue128;\red0\green0\blue0;}\wpprheadfoot1\paperw12240\paperh15840\margl1880\margr1880\margt1440\margb1440\headery720\footery720\endnhere\sectdefaultcl{\*\generator WPTools_7.000;}{\plain\f1\fs24\cf0 Bacon Wrapped \f1\cf0 Goat Cheese Stuffed Dates(GF)\par }}
2021-11-08	15:00:00.0000000	Gravitational 	72.0000	Passed	{\rtf1\ansi\deff0\uc1\ansicpg1252\deftab720{\fonttbl{\f0\fnil\fcharset1 Arial;}{\f1\fnil\fcharset1 Times New Roman;}{\f2\fnil\fcharset2 Wingdings;}{\f3\fnil\fcharset2 Symbol;}}{\colortbl\red0\green0\blue0;\red255\green0\blue0;\red0\green128\blue0;\red0\green0\blue255;\red255\green255\blue0;\red255\green0\blue255;\red128\green0\blue128;\red128\green0\blue0;\red0\green255\blue0;\red0\green255\blue255;\red0\green128\blue128;\red0\green0\blue128;\red255\green255\blue255;\red192\green192\blue192;\red128\green128\blue128;\red0\green0\blue0;}\wpprheadfoot1\paperw12240\paperh15840\margl1880\margr1880\margt1440\margb1440\headery720\footery720\endnhere\sectdefaultcl{\*\generator WPTools_7.000;}{\plain\f1\fs24\cf0 Tenderloin on Naan\par }}
2021-11-08	15:00:00.0000000	Gravitational 	13.0000	Plated	{\rtf1\ansi\deff0\uc1\ansicpg1252\deftab720{\fonttbl{\f0\fnil\fcharset1 Arial;}{\f1\fnil\fcharset1 Times New Roman;}{\f2\fnil\fcharset2 Wingdings;}{\f3\fnil\fcharset2 Symbol;}}{\colortbl\red0\green0\blue0;\red255\green0\blue0;\red0\green128\blue0;\red0\green0\blue255;\red255\green255\blue0;\red255\green0\blue255;\red128\green0\blue128;\red128\green0\blue0;\red0\green255\blue0;\red0\green255\blue255;\red0\green128\blue128;\red0\green0\blue128;\red255\green255\blue255;\red192\green192\blue192;\red128\green128\blue128;\red0\green0\blue0;}\wpprheadfoot1\paperw12240\paperh15840\margl1880\margr1880\margt1440\margb1440\headery720\footery720\endnhere\sectdefaultcl{\*\generator WPTools_7.000;}{\qc\wpparid0\plain\f1\fs24\cf0\b\ul Served Soup\par \plain\f1\fs24\cf0 White Velvet Soup(.1875)\par }}
2021-11-08	15:00:00.0000000	Gravitational 	27.0000	Plated	{\rtf1\ansi\deff0\uc1\ansicpg1252\deftab720{\fonttbl{\f0\fnil\fcharset1 Arial;}{\f1\fnil\fcharset1 Times New Roman;}{\f2\fnil\fcharset2 Wingdings;}{\f3\fnil\fcharset2 Symbol;}}{\colortbl\red0\green0\blue0;\red255\green0\blue0;\red0\green128\blue0;\red0\green0\blue255;\red255\green255\blue0;\red255\green0\blue255;\red128\green0\blue128;\red128\green0\blue0;\red0\green255\blue0;\red0\green255\blue255;\red0\green128\blue128;\red0\green0\blue128;\red255\green255\blue255;\red192\green192\blue192;\red128\green128\blue128;\red0\green0\blue0;\red128\green128\blue0;\red153\green153\blue255;\red153\green51\blue102;\red255\green255\blue204;\red204\green255\blue255;\red102\green0\blue102;\red255\green128\blue128;\red0\green102\blue204;\red204\green204\blue255;\red0\green204\blue255;\red204\green255\blue204;\red255\green255\blue153;\red153\green204\blue255;\red255\green153\blue204;\red204\green153\blue255;\red255\green204\blue153;\red51\green102\blue255;\red51\green204\blue204;\red153\green204\blue0;\red255\green204\blue0;\red255\green153\blue0;\red255\green102\blue0;\red102\green102\blue153;\red150\green150\blue150;\red0\green51\blue102;\red51\green153\blue102;\red0\green51\blue0;\red51\green51\blue0;\red153\green51\blue0;\red51\green51\blue153;\red51\green51\blue51;\red100\green100\blue100;\red240\green240\blue240;\red160\green160\blue160;\red51\green153\blue255;\red200\green200\blue200;\red55\green55\blue55;\red255\green255\blue225;\red102\green102\blue102;\red95\green140\blue237;\red235\green94\blue96;\red141\green97\blue194;\red45\green150\blue57;\red191\green76\blue145;\red227\green130\blue34;\red55\green127\blue158;\red51\green102\blue153;\red0\green0\blue208;\red212\green212\blue212;}\wpprheadfoot1\paperw12240\paperh15840\margl1880\margr1880\margt1440\margb1440\headery720\footery720\endnhere\sectdefaultcl{\*\generator WPTools_7.000;}{\qc\plain\f1\fs24\cf0\cb0\b\ul Bread Basket\par \plain\f1\fs24\cf0\cb0 French Rolls(4)\par }}
  
  ## Licenses
  This application was made using the MIT license.

  ## Questions
  GitHub: [github.com/coleleg](github.com/coleleg)
 
  Email: coleleg@gmail.com
