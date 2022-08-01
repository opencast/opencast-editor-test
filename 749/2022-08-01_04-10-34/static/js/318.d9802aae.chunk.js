"use strict";(self.webpackChunkopencast_editor=self.webpackChunkopencast_editor||[]).push([[318],{8318:function(e){e.exports=JSON.parse('{"mainMenu":{"cutting-button":"Schneiden","finish-button":"Verarbeitet","select-tracks-button":"Spur","thumbnail-button":"Miniaturbilder","metadata-button":"Metadaten","keyboard-controls-button":"Tastatursteuerung aktivieren","tooltip-aria":"Hauptnavigation"},"cuttingActions":{"cut-button":"Schneiden","cut-tooltip":"Teilen Sie das Segment an der aktuellen Position des Zeitmarkers. Hotkey: {{hotkeyName}}","cut-tooltip-aria":"Schnitt. Teilen Sie das Segment an der aktuellen Position des Zeitmarkers. Hotkey: {{hotkeyName}}.","delete-button":"Gel\xf6scht","delete-restore-tooltip":"Markieren oder entfernen Sie das Segment an der aktuellen Position zur L\xf6schung. Hotkey: {{hotkeyName}}","delete-restore-tooltip-aria":"L\xf6schen und Wiederherstellen. Markieren oder entfernen Sie das Segment an der aktuellen Position zur L\xf6schung. Hotkey: {{hotKeyName}}.","restore-button":"Wiederherstellen","mergeLeft-button":"Links zusammenf\xfcgen","mergeLeft-tooltip":"Verbinde das aktuell aktive Segment mit dem Segment auf der rechten Seite. Hotkey: {{hotkeyName}}","mergeLeft-tooltip-aria":"Rechts zusammenf\xfcgen. Verbinden Sie das aktuell aktive Segment mit dem Segment auf der rechten Seite. Hotkey: {{hotkeyName}}.","mergeRight-button":"Rechts zusammenf\xfcgen","mergeRight-tooltip":"Verbinde das aktuell aktive Segment mit dem Segment auf der rechten Seite. Hotkey: {{hotkeyName}}","mergeRight-tooltip-aria":"Rechts zusammenf\xfcgen. Verbinden Sie das aktuell aktive Segment mit dem Segment auf der rechten Seite. Hotkey: {{hotkeyName}}."},"video":{"previewButton":"Vorschaumodus","previewButton-tooltip":"\xdcberspringt gel\xf6schte Segmente bei der Wiedergabe des Videos. Derzeit {{status}}. Hotkey: {{hotkeyName}}","previewButton-aria":"Vorschaumodus aktivieren oder deaktivieren. Hotkey: {{hotkeyName}}.","playButton-tooltip":"Play-Button","time-duration-tooltip":"Wiedergabezeit und -dauer","duration-aria":"Dauer","time-aria":"Aktuelle Zeit","comError-text":"Ein Fehler trat bei der Kommunikation mit %1$s auf.","loadError-text":"Beim Laden des Inhaltes ist ein Fehler aufgetreten.","title-tooltip":"Videotitel","presenter-tooltip":"Vortragende","controls-tooltip":"Videosteuerungen"},"finishMenu":{"save-button":"\xc4nderungen speichern","start-button":"Ja, Verarbeitung starten","discard-button":"\xc4nderungen verwerfen"},"save":{"headline-text":"Verlasse aktuelles Projekt","confirm-button":"Ja, meine \xc4nderungen verwerfen","confirmButton-default-tooltip":"Speichern-Button","confirmButton-attempting-tooltip":"Kopplung wird durchgef\xfchrt\\\\u2026","confirmButton-success-tooltip":"Erfolgreich gespeichert","confirmButton-failed-tooltip":"Speichern fehlgeschlagen","info-text":"Das Video wird nicht verarbeitet, aber alle Schnittinformationen werden in Opencast gespeichert. Sie k\xf6nnen Ihre Bearbeitung sp\xe4ter fortsetzen.","success-text":"\xc4nderungen erfolgreich gespeichert!","success-tooltip-aria":"Erfolgreich gespeichert","saveArea-tooltip":"Speicherbereich"},"discard":{"headline-text":"\xc4nderungen verwerfen","confirm-button":"Ja, meine \xc4nderungen verwerfen","confirm-tooltip":"\xc4nderungen verwerfen Button","info-text":"Wollen Sie alle \xc4nderungen verwerfen? Dies kann nicht r\xfcckg\xe4ngig gemacht werden!"},"theEnd":{"discarded-text":"Alle Ihre \xc4nderungen sind nun f\xfcr immer verloren gegangen. Sie k\xf6nnen nun den Editor schlie\xdfen.","startOver-button":"Von neu beginnen!","startOver-tooltip":"Seite neu laden, um neu zu starten","info-text":"\xc4nderungen erfolgreich in Opencast gespeichert. Die Verarbeitung Ihrer \xc4nderungen kann bis zu {} Stunden dauern. Sie k\xf6nnen nun den Editor schlie\xdfen.\\n"},"workflowSelection":{"saveAndProcess-text":"Speichern & verarbeiten","selectWF-text":"Workflow w\xe4hlen","noWorkflows-text":"Ein Problem ist aufgetreten, es gibt keine Workflows f\xfcr die Verarbeitung Ihrer \xc4nderungen mit.<3/> Bitte speichern Sie Ihre \xc4nderungen und kontaktieren Sie einen Opencast Administrator.\\n","oneWorkflow-text":"Das Video wird mit dem Workflow \\"{{workflow}}\\" geschnitten und verarbeitet. <3/> Dies wird einige Zeit dauern.\\n","manyWorkflows-text":"W\xe4hlen Sie aus, welchen Workflow Opencast f\xfcr die Verarbeitung verwenden soll.","startProcessing-button":"Ja, Verarbeitung starten","back-button":"Bring mich zur\xfcck","selectWF-button":"Klicken, um diesen Workflow auszuw\xe4hlen","selectWF-button-aria":"Klicken, um den Workflow auszuw\xe4hlen: {{stateName}}\\n"},"timeline":{"generateWaveform-text":"Waveform wird generiert","segment-tooltip":"Segment {{segment}}","scrubber-text-aria":"Zeitmarker. {{currentTime}}. Aktives Segment: {{segment}}. {{segmentStatus}}. Kontrollen: {{moveLeft}} und {{moveRight}}, um den Zeitmarker zu bewegen. {{increase}} und {{decrease}}, um das Verschiebungdelta zu erh\xf6hen/verringern.\\n","segments-text-aria":"Segment {{index}}. {{segmentStatus}}. Start: {{start}}. Ende: {{end}}.\\n"},"workflowConfig":{"headline-text":"Workflow Konfiguration","area-tooltip":"Workflow-Konfigurationsbereich","satisfied-text":"Sind Sie zufrieden mit Ihrer Konfiguration?","confirm-button":"Ja, Verarbeitung starten"},"metadata":{"EVENTS-EVENTS-DETAILS-CATALOG-EPISODE":"Video Metadaten","submit-button":"Abschicken","submit-button-tooltip":"Best\xe4tigen Sie Ihre \xc4nderungen","reset-button":"Zur\xfccksetzen","reset-button-tooltip":"Alle \xc4nderungen r\xfcckg\xe4ngig machen","submit-helpertext":"Machen Sie so viele \xc4nderungen, wie Sie m\xf6chten, dann dr\xfccken Sie den {{buttonName}} Button.\\nBeachten Sie, dass Sie noch die Verarbeitung starten m\xfcssen, damit Ihre \xc4nderungen wirksam werden.","validation":{"required":"Erforderlich","duration-format":"Format muss HH:MM:SS sein","datetime":"Ung\xfcltig"},"labels":{"title":"Titel","subject":"Betreff","description":"Beschreibung","language":"Sprache","rightsHolder":"Rechte","license":"Lizenz","isPartOf":"Serie","creator":"Vortragende(r)","contributor":"Mitwirkende(r)","startDate":"Startdatum","duration":"Dauer","location":"Ort","source":"Quelle","created":"Erstellt am","publisher":"Herausgeber","identifier":"UID"},"language":{"LANGUAGES-SLOVENIAN":"Slowenisch","LANGUAGES-PORTUGESE":"Portugiesisch","LANGUAGES-ROMANSH":"R\xe4toromanisch","LANGUAGES-ARABIC":"Arabisch","LANGUAGES-POLISH":"Polnisch","LANGUAGES-ITALIAN":"Italienisch","LANGUAGES-CHINESE":"Chinesisch","LANGUAGES-FINNISH":"Finnisch","LANGUAGES-DANISH":"D\xe4nisch","LANGUAGES-UKRAINIAN":"Ukrainisch","LANGUAGES-FRENCH":"Franz\xf6sisch","LANGUAGES-SPANISH":"Spanisch","LANGUAGES-GERMAN_CH":"Schweizerdeutsch","LANGUAGES-NORWEGIAN":"Norwegisch","LANGUAGES-RUSSIAN":"Russisch","LANGUAGES-JAPANESE":"Japanisch","LANGUAGES-DUTCH":"Niederl\xe4ndisch","LANGUAGES-TURKISH":"T\xfcrkisch","LANGUAGES-HINDI":"Hindi","LANGUAGES-SWEDISH":"Schwedisch","LANGUAGES-ENGLISH":"Englisch","LANGUAGES-GERMAN":"Deutsch"},"license":{"EVENTS-LICENSE-CC0":"CC0","EVENTS-LICENSE-CCBYND":"CC-BY-ND","EVENTS-LICENSE-CCBYNCND":"CC-BY-NC-ND","EVENTS-LICENSE-CCBYNCSA":"CC-BY-NC-SA","EVENTS-LICENSE-ALLRIGHTS":"Alle Rechte vorbehalten","EVENTS-LICENSE-CCBYSA":"CC-BY-SA","EVENTS-LICENSE-CCBYNC":"CC-BY-NC","EVENTS-LICENSE-CCBY":"CC-BY"}},"error":{"generic-message":"Ein kritischer Fehler ist aufgetreten!","details":"Details: ","workflowActive-errorTitle":"Temporarily unavailable","workflowActive-errorMessage":"An Opencast workflow is currently running, please wait until it is finished."},"landing":{"main-heading":"Willkommen im Video-Editor","contact-admin":"Falls Sie versucht haben, ein bestimmtes Video zu bearbeiten, aber diese Seite sehen, wenden Sie sich bitte an Ihren Administrator.","start-editing-1":"Um mit der Bearbeitung zu beginnen, geben Sie den Parameter an ","start-editing-2":" mit der Mediapaket ID des Videos, das Sie bearbeiten m\xf6chten.","link-to-documentation":"Weitere Informationen zur Konfiguration des Video-Editors finden Sie im Administrationshandbuch unter "},"various":{"error-details-text":"Details: {{errorMessage}}\\n","error-text":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es sp\xe4ter noch einmal.","goBack-button":"Nein, zur\xfcck"},"trackSelection":{"description":"W\xe4hlen oder deaktivieren Sie die Spuren f\xfcr die Verarbeitung und Ver\xf6ffentlichung.","trackInactive":"inaktiv","deleteTrackText":"Spur l\xf6schen","restoreTrackText":"Spur wiederherstellen","cannotDeleteTrackText":"Spur kann nicht gel\xf6scht werden","deleteTrackTooltip":"Diesen Track nicht verarbeiten und ver\xf6ffentlichen.","restoreTrackTooltip":"Diesen Track verarbeiten und ver\xf6ffentlichen.","cannotDeleteTrackTooltip":"Dieser Track kann nicht entfernt werden."},"keyboardControls":{"header":"Tastatursteuerung","defaultGroupName":"Allgemein","missingLabel":"Unbekannt","groupCuttingView":"Schnittansicht","groupCuttingViewScrubber":"Schnittansicht - Scrubber","sequenceSeperator":"oder","genericError":"Fehler beim Laden der \xdcbersicht","videoPlayButton":"Video abspielen/pausieren","scrubberLeft":"Nach links","scrubberRight":"Nach rechts","scubberIncrease":"Schneller","scrubberDecrease":"Langsamer"},"theme":{"appearance":"Appearance","darkmode":"Dark mode","lightmode":"Light mode","system":"System design"}}')}}]);