"use strict";(self.webpackChunkopencast_editor=self.webpackChunkopencast_editor||[]).push([[318],{8318:function(e){e.exports=JSON.parse('{"mainMenu":{"cutting-button":"Schneiden","finish-button":"Fertigstellen","select-tracks-button":"Spuren","subtitles-button":"Untertitel","thumbnail-button":"Vorschaubild","metadata-button":"Metadaten","keyboard-controls-button":"Tastatursteuerung","tooltip-aria":"Hauptnavigation"},"cuttingActions":{"cut-button":"Schneiden","cut-tooltip":"Segment an der aktuellen Position der Zeitleiste teilen. Hotkey: {{hotkeyName}}","cut-tooltip-aria":"Cut. Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}.","delete-button":"L\xf6schen","delete-restore-tooltip":"Markieren oder entfernen Sie das Segment an der aktuellen Position zur L\xf6schung. Hotkey: {{hotkeyName}}","delete-restore-tooltip-aria":"L\xf6schen und Wiederherstellen. Markieren oder entfernen Sie das Segment an der aktuellen Position zur L\xf6schung. Hotkey: {{hotKeyName}}.","restore-button":"Wiederherstellen","mergeLeft-button":"Links zusammenf\xfcgen","mergeLeft-tooltip":"Verbinde das aktuell aktive Segment mit dem Segment auf der linken Seite. Hotkey: {{hotkeyName}}","mergeLeft-tooltip-aria":"Links zusammenf\xfcgen. Verbinden Sie das aktuell aktive Segment mit dem Segment auf der linken Seite. Hotkey: {{hotkeyName}}.","mergeRight-button":"Rechts zusammenf\xfcgen","mergeRight-tooltip":"Verbinde das aktuell aktive Segment mit dem Segment auf der rechten Seite. Hotkey: {{hotkeyName}}","mergeRight-tooltip-aria":"Rechts zusammenf\xfcgen. Verbinden Sie das aktuell aktive Segment mit dem Segment auf der rechten Seite. Hotkey: {{hotkeyName}}."},"video":{"previewButton":"Vorschaumodus","previewButton-tooltip":"\xdcberspringt gel\xf6schte Segmente bei der Wiedergabe des Videos. Derzeit {{status}}. Hotkey: {{hotkeyName}}","previewButton-aria":"Vorschaumodus aktivieren oder deaktivieren. Hotkey: {{hotkeyName}}.","playButton-tooltip":"Video wiedergeben","pauseButton-tooltip":"Video pausieren","current-time-tooltip":"Aktuelle Zeit","time-duration-tooltip":"Videodauer","duration-aria":"Dauer","time-aria":"Aktuelle Zeit","comError-text":"Bei der Kommunikation mit Opencast ist ein Problem aufgetreten.","loadError-text":"Beim Laden des Videos ist ein Fehler aufgetreten.","title-tooltip":"Videotitel","presenter-tooltip":"Vortragende"},"finishMenu":{"save-button":"\xc4nderungen speichern","start-button":"Verarbeitung starten","discard-button":"\xc4nderungen verwerfen"},"save":{"headline-text":"Aktuelles Projekt speichern","confirm-button":"Ja, \xc4nderungen speichern","confirmButton-attempting-tooltip":"Versuche zu speichern","confirmButton-success-tooltip":"Erfolgreich gespeichert","confirmButton-failed-tooltip":"Speichern fehlgeschlagen","info-text":"Das Video wird nicht verarbeitet, aber alle Schnittinformationen werden in Opencast gespeichert. Sie k\xf6nnen Ihre Bearbeitung sp\xe4ter fortsetzen.","success-text":"\xc4nderungen erfolgreich gespeichert! Sie k\xf6nnen den Editor nun schlie\xdfen oder weiter arbeiten.","success-tooltip-aria":"Erfolgreich gespeichert","saveArea-tooltip":"Speicherbereich"},"discard":{"headline-text":"\xc4nderungen verwerfen","confirm-button":"Ja, \xc4nderungen verwerfen","info-text":"Bist du sicher, dass du diese \xc4nderung verwerfen m\xf6chtest? Dies kann nicht r\xfcckg\xe4ngig gemacht werden!"},"theEnd":{"discarded-text":"Ihre \xc4nderungen wurden verworfen. Sie k\xf6nnen den Editor nun schlie\xdfen.","startOver-button":"Von neuem beginnen!","startOver-tooltip":"Seite neu laden, um neu zu starten","info-text":"\xc4nderungen erfolgreich in Opencast gespeichert. Die Bearbeitung Ihrer \xc4nderungen kann einige Zeit dauern, bitte haben Sie etwas Geduld. Sie k\xf6nnen nun den Editor schlie\xdfen.\\n"},"workflowSelection":{"saveAndProcess-text":"Speichern & verarbeiten","selectWF-text":"Workflow w\xe4hlen","noWorkflows-text":"Ein Problem ist aufgetreten, es gibt keine Workflows f\xfcr die Verarbeitung Ihrer \xc4nderungen mit.<3/> Bitte speichern Sie Ihre \xc4nderungen und kontaktieren Sie einen Opencast Administrator.\\n","oneWorkflow-text":"Das Video wird mit dem Workflow \\"{{workflow}}\\" geschnitten und verarbeitet. <3/> Dies wird einige Zeit dauern.\\n","manyWorkflows-text":"W\xe4hlen Sie aus, welchen Workflow Opencast f\xfcr die Verarbeitung verwenden soll.","startProcessing-button":"Verarbeitung starten","back-button":"Zur\xfcck","selectWF-button":"Klicken, um diesen Workflow auszuw\xe4hlen","selectWF-button-aria":"Klicken, um den Workflow auszuw\xe4hlen: {{stateName}}\\n"},"timeline":{"generateWaveform-text":"Waveform wird generiert","segment-tooltip":"Segment {{segment}}","scrubber-text-aria":"Timeline marker. {{currentTime}}. Active segment: {{segment}}. {{segmentStatus}}. Controls: {{moveLeft}} and {{moveRight}} to move the timeline marker. {{increase}} and {{decrease}} to increase/decrase the move delta.\\n","segments-text-aria":"Segment {{index}}. {{segmentStatus}}. Start: {{start}}. Ende: {{end}}.\\n"},"workflowConfig":{"headline-text":"Workflow Konfiguration","satisfied-text":"Sind Sie zufrieden mit Ihrer Konfiguration?","confirm-button":"Ja, Verarbeitung starten"},"metadata":{"EVENTS-EVENTS-DETAILS-CATALOG-EPISODE":"Video Metadaten","submit-button":"Abschicken","submit-button-tooltip":"Best\xe4tigen Sie Ihre \xc4nderungen","reset-button":"Zur\xfccksetzen","reset-button-tooltip":"Alle \xc4nderungen r\xfcckg\xe4ngig machen","submit-helpertext":"Machen Sie so viele \xc4nderungen, wie Sie m\xf6chten, dann dr\xfccken Sie den {{buttonName}} Button.\\nBeachten Sie, dass Sie noch die Verarbeitung starten m\xfcssen, damit Ihre \xc4nderungen wirksam werden.","validation":{"required":"Erforderlich","duration-format":"Format muss HH:MM:SS sein","datetime":"Ung\xfcltig"},"labels":{"title":"Titel","subject":"Betreff","description":"Beschreibung","language":"Sprache","rightsHolder":"Rechte","license":"Lizenz","isPartOf":"Serie","creator":"Vortragende(r)","contributor":"Mitwirkende(r)","startDate":"Startdatum","duration":"Dauer","location":"Ort","source":"Quelle","created":"Erstellt am","publisher":"Herausgeber","identifier":"UID"},"language":{"LANGUAGES-SLOVENIAN":"Slowenisch","LANGUAGES-PORTUGESE":"Portugiesisch","LANGUAGES-ROMANSH":"R\xe4toromanisch","LANGUAGES-ARABIC":"Arabisch","LANGUAGES-POLISH":"Polnisch","LANGUAGES-ITALIAN":"Italienisch","LANGUAGES-CHINESE":"Chinesisch","LANGUAGES-FINNISH":"Finnisch","LANGUAGES-DANISH":"D\xe4nisch","LANGUAGES-UKRAINIAN":"Ukrainisch","LANGUAGES-FRENCH":"Franz\xf6sisch","LANGUAGES-SPANISH":"Spanisch","LANGUAGES-GERMAN_CH":"Schweizerdeutsch","LANGUAGES-NORWEGIAN":"Norwegisch","LANGUAGES-RUSSIAN":"Russisch","LANGUAGES-JAPANESE":"Japanisch","LANGUAGES-DUTCH":"Niederl\xe4ndisch","LANGUAGES-TURKISH":"T\xfcrkisch","LANGUAGES-HINDI":"Hindi","LANGUAGES-SWEDISH":"Schwedisch","LANGUAGES-ENGLISH":"Englisch","LANGUAGES-GERMAN":"Deutsch"},"license":{"EVENTS-LICENSE-CC0":"CC0","EVENTS-LICENSE-CCBYND":"CC-BY-ND","EVENTS-LICENSE-CCBYNCND":"CC-BY-NC-ND","EVENTS-LICENSE-CCBYNCSA":"CC-BY-NC-SA","EVENTS-LICENSE-ALLRIGHTS":"Alle Rechte vorbehalten","EVENTS-LICENSE-CCBYSA":"CC-BY-SA","EVENTS-LICENSE-CCBYNC":"CC-BY-NC","EVENTS-LICENSE-CCBY":"CC-BY"},"calendar-prev":"Vorherige","calendar-next":"N\xe4chste"},"thumbnail":{"title":"Vorschaubildeditor","noThumbnailAvailable":"Kein Vorschaubild verf\xfcgbar","previewImageAlt":"Vorschaubild f\xfcr Spur","buttonGenerate":"Generieren","buttonGenerate-tooltip":"Generate a new thumbnail from the current timeline marker position","buttonGenerate-tooltip-aria":"Generate a new thumbnail from the current timeline marker position","buttonUpload":"Hochladen","buttonUpload-tooltip":"Ein Bild hochladen","buttonUpload-tooltip-aria":"Ein Bild hochladen","buttonUseForOtherThumbnails":"F\xfcr alle Spuren verwenden","buttonUseForOtherThumbnails-tooltip":"Benutze das Vorschaubild f\xfcr alle Spuren","buttonUseForOtherThumbnails-tooltip-aria":"Benutze das Vorschaubild f\xfcr alle Spuren","buttonDiscard":"Verwerfen","buttonDiscard-tooltip":"Verwerfe Vorschaubild f\xfcr diese Spur","buttonDiscard-tooltip-aria":"Verwerfe Vorschaubild f\xfcr diese Spur","buttonGenerateAll":"Alle generieren","buttonGenerateAll-tooltip":"Generate new thumbnails for all tracks from the current timeline marker position","buttonGenerateAll-tooltip-aria":"Generate new thumbnails for all tracks from the current timeline marker position","explanation":"Erstelle oder lade ein Vorschaubild f\xfcr jede Spur hoch.","primary":"Prim\xe4r","secondary":"Sekund\xe4r"},"thumbnailSimple":{"rowTitle":"Vorschaubilder hier \xe4ndern","from":"von"},"error":{"generic-message":"Ein kritischer Fehler ist aufgetreten!","details":"Details: ","workflowActive-errorTitle":"Vor\xfcbergehend nicht verf\xfcgbar","workflowActive-errorMessage":"Dieses Video wird verarbeitet Bitte warten Sie, bis der Prozess abgeschlossen ist."},"landing":{"main-heading":"Willkommen im Video-Editor","contact-admin":"Falls Sie versucht haben, ein bestimmtes Video zu bearbeiten, aber diese Seite sehen, wenden Sie sich bitte an Ihren Administrator.","start-editing-1":"Um mit der Bearbeitung zu beginnen, geben Sie den Parameter an ","start-editing-2":" mit der Mediapaket ID des Videos, das Sie bearbeiten m\xf6chten.","link-to-documentation":"Weitere Informationen zur Konfiguration des Video-Editors finden Sie im Administrationshandbuch unter "},"various":{"error-details-text":"Details: {{errorMessage}}\\n","error-text":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es sp\xe4ter noch einmal.","goBack-button":"Nein, zur\xfcck"},"trackSelection":{"description":"W\xe4hlen oder deaktivieren Sie die Spuren f\xfcr die Verarbeitung und Ver\xf6ffentlichung.","trackInactive":"inaktiv","deleteTrackText":"Spur l\xf6schen","restoreTrackText":"Spur wiederherstellen","cannotDeleteTrackText":"Spur kann nicht gel\xf6scht werden","deleteTrackTooltip":"Diese Spur nicht verarbeiten und ver\xf6ffentlichen.","restoreTrackTooltip":"Diese Spur verarbeiten und ver\xf6ffentlichen.","cannotDeleteTrackTooltip":"Diese Spur kann nicht entfernt werden."},"subtitles":{"selectSubtitleButton-tooltip":"Untertitel f\xfcr {{title}} bearbeiten","selectSubtitleButton-tooltip-aria":"{{title}} zur Bearbeitung von Untertiteln ausw\xe4hlen","createSubtitleButton-tooltip":"\xd6ffnet einen Dialog zum Erstellen neuer Untertitel","createSubtitleButton-clicked-tooltip-aria":"Enth\xe4lt einen Dialog zum Erstellen neuer Untertitel","createSubtitleButton-createButton":"Erstellen","createSubtitleButton-createButton-tooltip":"Beginne eine neue Untertiteldatei mit dem ausgew\xe4hlten Titel.","createSubtitleDropdown-label":"W\xe4hle eine Sprache","backButton":"Zur\xfcck","backButton-tooltip":"Zur\xfcck zur Untertitelauswahl","editTitle":"Untertitel-Editor - {{title}}","editTitle-loading":"L\xe4dt","generic":"Unspezifiziert"},"subtitleList":{"startTime-tooltip":"Beginn des Segments","startTime-tooltip-aria":"Beginnt bei","endTime-tooltip":"Ende des Segments","endTime-tooltip-aria":"Endet bei","addSegmentAbove":"Segment oberhalb hinzuf\xfcgen","addSegmentBelow":"Segment unterhalb hinzuf\xfcgen","jumpToSegmentAbove":"Zum Segment oberhalb springen","jumpToSegmentBelow":"Zum Segment unterhalb springen","deleteSegment":"Segment l\xf6schen"},"subtitleVideoArea":{"selectVideoLabel":"Video Flavors"},"subtitleTimeline":{"overviewTimelineTooltip":"Timeline overview"},"keyboardControls":{"header":"Tastatursteuerung","defaultGroupName":"Allgemein","missingLabel":"Unbekannt","groupVideoPlayer":"Videoplayer","groupCuttingView":"Schneiden","groupCuttingViewScrubber":"Zeitleiste","groupSubtitleList":"Untertitel","sequenceSeperator":"oder","genericError":"Fehler beim Laden der \xdcbersicht","videoPlayButton":"Video abspielen/pausieren","scrubberLeft":"Nach links","scrubberRight":"Nach rechts","scubberIncrease":"Schneller","scrubberDecrease":"Langsamer"},"theme":{"appearance":"Erscheinungsbild","selectThemesLabel":"Darstellung","darkmode":"Dunkles Design","lightmode":"Helles Design","system":"System Design","high-contrast-dark":"Hoher Kontrast (Dunkles Design)","high-contrast-light":"Hoher Kontrast (Helles Design)"}}')}}]);