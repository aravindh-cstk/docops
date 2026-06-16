---
title: "[Content Migration] - New CMS Connector API Guide"
description: Guide for extending the CMS Connector API to support new Content Management Systems (CMS) and file types.
url: https://www.contentstack.com/docs/developers/content-migration/new-cms-connector-api-guide
product: Content Migration
doc_type: api-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Content Migration] - New CMS Connector API Guide

This page provides a developer guide for extending the CMS Connector API to support new CMS platforms and file types. It is intended for developers implementing new CMS packages or updating validation/processing logic, and should be used when integrating additional CMS configurations, validators, mappers, or file extension handling.

## New CMS Connector API Guide

This document serves as a guide for extending the CMS Connector API to support new Content Management Systems (CMS) and file types. It outlines the process of creating new CMS packages, updating validator and mapper logic, and handling various file extensions and CMS configurations in the `/validator` route and `handleFileProcessing` function. The goal is to maintain a modular and CMS-agnostic architecture, allowing for seamless integration of different CMS platforms by following a structured approach for validation, processing, and data mapping.

[Click here](https://assets.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc73d6a2ba6d0a8ba/New%20CMS%20Connector%20API%20Guide.pdf) to download this developer guide.

## Common questions

### Where can I find the full developer guide?
Use the download link provided on this page to access the PDF developer guide.

### What parts of the API are mentioned as key extension points?
The page references the `/validator` route and the `handleFileProcessing` function as key areas for handling validation and file processing.

### What is the main architectural goal when adding support for a new CMS?
To maintain a modular and CMS-agnostic architecture that enables seamless integration of different CMS platforms.

### What types of additions does this guide cover?
It covers creating new CMS packages, updating validator and mapper logic, and handling various file extensions and CMS configurations.