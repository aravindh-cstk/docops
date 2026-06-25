---
title: "[AM2.0] - Out-of-the-Box Asset Types"
description: Assets in Contentstack provides a comprehensive set of system-defined asset types out of the box, including supported asset types, their MIME types, and file extensions.
url: https://www.contentstack.com/docs/assets/out-of-the-box-asset-types
product: Contentstack
doc_type: reference
audience:
  - developers
  - administrators
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Out-of-the-Box Asset Types

This page describes the system-defined asset types available out of the box in Contentstack Assets, including their MIME types, file extensions, and whether they are restricted. It is intended for developers and administrators who need to understand supported upload formats and configure or associate asset types with fields for metadata workflows.

## Out-of-the-Box Asset Types

Assets in Contentstack provides a comprehensive set of system-defined asset types out of the box. Each asset type maps to a MIME type and file extension, giving your team immediate support for standard file formats without the need for additional configuration.

You can associate these asset types with fields to capture metadata relevant to your workflows.

## Asset Types Catalog

The following categories include supported asset types, their MIME types, and file extensions.

**Note:** Some file types are flagged as restricted (for example, `.exe`, `.sh`, `.bat`, `.php`, `.js`, `.py`) because they may introduce security risks or require special handling. These formats are blocked by default to prevent malicious uploads. Administrators can explicitly enable them in settings if business requirements demand it.

Once enabled, they behave like any other type, but you should use them with caution.

| Category | Asset Type Name | Content Type (MIME Type) | File Extension | Restricted |
|---|---|---|---|---|
| 3D Models | Apple USDZ 3D model | `model/vnd.usdz+zip` | `.usdz` | No |
| 3D Models | COLLADA 3D model | `model/vnd.collada+xml` | `.dae` | No |
| 3D Models | FBX 3D model | `application/octet-stream` | `.fbx` | No |
| 3D Models, Virtual Reality | GL Transmission Format Binary | `model/gltf-binary` | `.glb` | No |
| 3D Models | OBJ 3D model | `application/octet-stream` | `.obj` | No |
| 3D Models | STL 3D model | `model/stl` | `.stl` | No |
| Archives | 7z Archive | `application/x-7z-compressed` | `.7z` | No |
| Archives | BZIP2 Archive | `application/x-bzip2` | `.bz2` | No |
| Archives | GZIP Archive | `application/x-gzip` | `.gz` | No |
| Archives | RAR Archive | `application/x-rar-compressed` | `.rar` | No |
| Archives | TAR Archive | `application/x-tar` | `.tar` | No |
| Archives | ZIP Archive | `application/zip` | `.zip` | No |
| Audio | Advanced Audio Coding | `audio/aac` | `.aac` | No |
| Audio | Free Lossless Audio Codec | `audio/flac` | `.flac` | No |
| Audio | MIDI music file | `audio/midi` | `.mid`, `.midi` | No |
| Audio | MP3 audio file | `audio/mpeg` | `.mp3` | No |
| Audio | MPEG-4 Audio | `audio/mp4` | `.m4a` | No |
| Audio | Ogg Audio | `audio/ogg` | `.ogg` | No |
| Audio | Opus audio codec | `audio/opus` | `.opus` | No |
| Audio | RealAudio | `audio/x-pn-realaudio` | `.ra` | No |
| Audio | RealAudio Metadata | `audio/x-pn-realaudio` | `.ram` | No |
| Audio | Waveform audio file | `audio/wav` | `.wav` | No |
| Audio | WMA Audio | `audio/x-ms-wma` | `.wma` | No |
| CAD | AutoCAD Drawing | `image/vnd.dwg` | `.dwg` | No |
| CAD | AutoCAD Interchange Format | `image/vnd.dxf` | `.dxf` | No |
| CAD | IGES CAD file | `model/iges` | `.iges`, `.igs` | No |
| Code | AWK Script | `application/x-awk` | `.awk` | Yes |
| Code | C Shell Script | `application/x-csh` | `.csh` | Yes |
| Code | C# Script | `text/x-csharp` | `.cs` | Yes |
| Code | C++ source | `text/x-c++-src` | `.cpp` | Yes |
| Code | C++ Header | `text/x-c++hdr` | `.h` | Yes |
| Code | Emacs Lisp Script | `application/x-emacs-lisp` | `.el` | Yes |
| Code | Erlang Script | `text/x-erlang` | `.erl` | Yes |
| Code | Java source code | `text/x-java-source` | `.java` | Yes |
| Code | Korn Shell Script | `application/x-ksh` | `.ksh` | Yes |
| Code | Lua Script | `text/x-lua` | `.lua` | Yes |
| Code | Objective-C Source | `text/x-objc` | `.m` | Yes |
| Code | Perl Script | `application/x-perl` | `.pl` | Yes |
| Code | PHP Script | `application/x-php` | `.php` | Yes |
| Code | PostScript | `application/postscript` | `.ps` | Yes |
| Code | PowerShell Script | `application/octet-stream` | `.ps1` | Yes |
| Code | Python Compiled Code | `application/x-python-code` | `.pyc` | Yes |
| Code | Python script | `text/x-python` | `.py` | Yes |
| Code | R Script | `text/x-r` | `.r` | Yes |
| Code | Scala Script | `text/x-scala` | `.scala` | Yes |
| Code | SQL Script | `application/x-sql` | `.sql` | Yes |
| Code | Tcl Script | `application/x-tcl` | `.tcl` | Yes |
| Code | VBScript | `text/vbscript` | `.vbs` | Yes |
| Code | Visual Basic Script | `text/x-vb` | `.vb` | Yes |
| Code | Z Shell Script | `application/x-zsh` | `.zsh` | Yes |
| Data | CSV | `text/csv` | `.csv` | No |
| Data | JSON | `application/json` | `.json` | No |
| Data | TSV | `text/tab-separated-values` | `.tsv` | No |
| Data | XML | `text/xml` | `.xml` | No |
| Databases | Generic database file | `application/octet-stream` | `.db` | No |
| Databases | Microsoft Access Database | `application/x-msaccess` | `.mdb` | No |
| Databases | SQL script | `application/sql` | `.sql` | No |
| Databases | SQLite database | `application/x-sqlite3` | `.sqlite` | No |
| Document | Flat OpenDocument Text | `application/vnd.oasis.opendocument.text` | `.fodt` | No |
| Document | Microsoft PowerPoint | `application/vnd.ms-powerpoint` | `.ppt` | No |
| Document | Microsoft PowerPoint Open XML | `application/vnd.openxmlformats-officedocument.presentationml.presentation` | `.pptx` | No |
| Document | Microsoft Word Document | `application/msword` | `.doc` | No |
| Document | Microsoft Word Open XML Document | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | `.docx` | No |
| Document | Microsoft Works Document | `application/vnd.ms-works` | `.wps` | No |
| Document | Microsoft Write Document | `application/x-mswrite` | `.wri` | No |
| Document | OpenDocument Presentation | `application/vnd.oasis.opendocument.presentation` | `.odp` | No |
| Document | OpenDocument Text | `application/vnd.oasis.opendocument.text` | `.odt` | No |
| Document | PDF | `application/pdf` | `.pdf` | No |
| Document, Text | Plain text document | `text/plain` | `.txt` | No |
| Document | WordPerfect 5.1 Document | `application/wordperfect5.1` | `.wp5` | No |
| Document | WordPerfect 6.0 Document | `application/wordperfect6.0` | `.wp6` | No |
| Document | WordPerfect Document | `application/vnd.wordperfect` | `.wpd` | No |
| Document | WordPerfect Document | `application/wordperfect` | `.wp` | No |
| Document | WordPerfect Document | `application/vnd.wordperfect` | `.wpf` | No |
| E-books | EPUB e-book format | `application/epub+zip` | `.epub` | No |
| E-books | Mobipocket e-book format | `application/x-mobipocket-ebook` | `.mobi` | No |
| Email | Email message | `message/rfc822` | `.eml` | No |
| Email | Outlook message | `application/vnd.ms-outlook` | `.msg` | No |
| Executable | Batch file | `application/bat` | `.bat` | Yes |
| Executable | JAR | `application/x-java-archive` | `.jar` | Yes |
| Executable | Linux Executable | `application/x-executable` | `.sh`, `.bin`, `.elf` | Yes |
| Executable | macOS Application | `application/octet-stream` | `.app` | Yes |
| Executable | Unix shell script | `application/x-sh` | `.sh` | Yes |
| Executable | Windows executable | `application/x-msdownload` | `.exe` | Yes |
| Font | Bitmap Distribution Format Font | `application/x-font-bdf` | `.bdf` | No |
| Font | Embedded OpenType Font | `application/vnd.ms-fontobject` | `.eot` | No |
| Font | FontForge Font Data | `application/octet-stream` | `.sfd` | No |
| Font | Open Font Format | `application/font-sfnt` | `.sfnt` | No |
| Font | OpenType Font | `font/otf` | `.otf` | No |
| Font | PCF Font | `application/x-font-pcf` | `.pcf` | No |
| Font | TrueDoc Soft Font | `application/font-tdpfr` | `.pfr` | No |
| Font | TrueType Font | `font/ttf` | `.ttf` | No |
| Font | TrueType Font Collection | `font/collection` | `.ttc` | No |
| Font | Type 1 Font | `application/x-font-type1` | `.pfa`, `.pfb` | No |
| Font | Web Open Font Format | `font/woff` | `.woff` | No |
| Font | Web Open Font Format | `font/woff2` | `.woff2` | No |
| Game | Game data archive | `application/octet-stream` | `.pak` | No |
| Game | Unity game file | `application/octet-stream` | `.unity3d` | No |
| Geospatial | ESRI Geodatabase | `application/octet-stream` | `.gdb` | No |
| Geospatial | ESRI Shapefile | `application/octet-stream` | `.shp` | No |
| Geospatial | GeoJSON | `application/geo+json` | `.geojson` | No |
| Geospatial | Google Earth KML file | `application/vnd.google-earth.kml+xml` | `.kml` | No |
| Images | Bitmap image | `image/bmp` | `.bmp` | No |
| Images | Encapsulated PostScript | `application/postscript` | `.eps` | No |
| Images | GIF image | `image/gif` | `.gif` | No |
| Images | ICO Image | `image/ico` | `.ico` | No |
| Images | ICO Image | `image/x-icon` | `.ico` | No |
| Images | JPEG image | `image/jpeg` | `.jpg`, `.jpeg` | No |
| Images | PBM Image | `image/x-portable-bitmap` | `.pbm` | No |
| Images | PGM Image | `image/x-portable-graymap` | `.pgm` | No |
| Images | PNG image | `image/png` | `.png` | No |
| Images | PPM Image | `image/x-portable-pixmap` | `.ppm` | No |
| Images | PSD Image | `image/x-adobe-photoshop` | `.psd` | No |
| Images | Scalable Vector Graphics | `image/svg+xml` | `.svg` | No |
| Images | Tagged Image File Format | `image/tiff` | `.tif`, `.tiff` | No |
| Images | TIFF Image | `image/tiff` | `.tiff`, `.tif` | No |
| Images | WebP image | `image/webp` | `.webp` | No |
| Images | XBM Image | `image/x-xbitmap` | `.xbm` | No |
| Images | XPM Image | `image/x-xpixmap` | `.xpm` | No |
| Multimedia | Advanced SubStation Alpha Subtitle | `text/x-ssa` | `.ass` | No |
| Multimedia | MPlayer Playlist | `application/octet-stream` | `.mpl` | No |
| Multimedia | SAMI Caption File | `application/sami` | `.sami` | No |
| Multimedia | Shockwave Flash | `application/x-shockwave-flash` | `.swf` | No |
| Multimedia | SMIL Presentation | `application/smil` | `.smil` | No |
| Multimedia | SMIL Presentation | `application/smil+xml` | `.smil` | No |
| Multimedia | SubRip Subtitle | `application/x-subrip` | `.srt` | No |
| Multimedia | SubStation Alpha Subtitle | `text/x-ssa` | `.ssa` | No |
| Multimedia | Subtitle File | `text/plain` | `.sub` | No |
| Multimedia | VobSub Index | `application/octet-stream` | `.idx` | No |
| Multimedia | WebVTT Subtitle | `text/vtt` | `.vtt` | No |
| Music Notation | MusicXML music notation | `application/vnd.recordare.musicxml+xml` | `.musicxml` | No |
| Music Notation | MusiXTeX music notation | `application/octet-stream` | `.musiXTeX` | No |
| Spreadsheets | Microsoft Excel Spreadsheet | `application/vnd.ms-excel` | `.xls` | No |
| Spreadsheets | Microsoft Excel Open XML Spreadsheet | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` | `.xlsx` | No |
| Spreadsheets | OpenDocument Spreadsheet | `application/vnd.oasis.opendocument.spreadsheet` | `.ods` | No |
| Text | Markdown | `text/markdown` | `.md` | No |
| Text | Rich Text Format | `application/rtf` | `.rtf` | No |
| Text | TeX | `application/x-tex` | `.tex` | No |
| Text | YAML | `text/yaml` | `.yaml`, `.yml` | No |
| Video | Audio Video Interleave | `video/x-msvideo` | `.avi` | No |
| Video | Matroska video | `video/x-matroska` | `.mkv` | No |
| Video | MPEG-4 video | `video/mp4` | `.mp4` | No |
| Video | MPEG-4 Video | `video/x-m4v` | `.m4v` | No |
| Video | Ogg Video | `video/ogg` | `.ogv` | No |
| Video | QuickTime video | `video/quicktime` | `.mov` | No |
| Video | RealVideo | `video/vnd.rn-realvideo` | `.rv` | No |
| Video | WebM video | `video/webm` | `.webm` | No |
| Virtual Machines | Open Virtualization Format Appliance | `application/ovf` | `.ova` | Yes |
| Virtual Machines | VMware Virtual Disk | `application/x-vmdk` | `.vmdk` | Yes |
| Web | Cascading Style Sheets | `text/css` | `.css` | No |
| Web | HTML document | `text/html` | `.html`, `.htm` | No |
| Web | JavaScript file | `application/javascript` | `.js` | Yes |
| WebAssembly | WebAssembly Module | `application/wasm` | `.wasm` | Yes |

## Common questions

### What does “Restricted” mean for an asset type?
Restricted file types are blocked by default to prevent malicious uploads, and administrators can explicitly enable them in settings if business requirements demand it.

### Can restricted file types be uploaded after enabling them?
Once enabled, they behave like any other type, but you should use them with caution.

### Why do asset types map to MIME types and file extensions?
Each asset type maps to a MIME type and file extension, giving your team immediate support for standard file formats without the need for additional configuration.

### How are these asset types used in Contentstack?
You can associate these asset types with fields to capture metadata relevant to your workflows.