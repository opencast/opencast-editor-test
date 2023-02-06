"use strict";(self.webpackChunkopencast_editor=self.webpackChunkopencast_editor||[]).push([[494],{6494:function(e){e.exports=JSON.parse('{"mainMenu":{"cutting-button":"Knippen","finish-button":"Opslaan","select-tracks-button":"Sporen","subtitles-button":"Subtitles","thumbnail-button":"Miniatuurafbeelding","metadata-button":"Metadata","keyboard-controls-button":"Keyboard Controls","tooltip-aria":"Hoofdnavigatie"},"cuttingActions":{"cut-button":"Knippen","cut-tooltip":"Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}","cut-tooltip-aria":"Cut. Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}.","delete-button":"Verwijder","delete-restore-tooltip":"Markeer of verwijder het segment op de huidige positie om te worden verwijderd. Sneltoets: {{hotkeyName}}","delete-restore-tooltip-aria":"Verwijderen en herstellen. Markeer of verwijder het segment op de huidige positie om te worden verwijderd. Sneltoets: {{hotKeyName}}.","restore-button":"Herstellen","mergeLeft-button":"Links samenvoegen","mergeLeft-tooltip":"Combineer het momenteel actieve segment met het segment aan de linkerkant. Sneltoets: {{hotkeyName}}","mergeLeft-tooltip-aria":"Links samenvoegen. Combineer het momenteel actieve segment met het segment aan de linkerkant. Sneltoets: {{hotkeyName}}.","mergeRight-button":"Rechts samenvoegen","mergeRight-tooltip":"Combineer het momenteel actieve segment met het segment aan de rechterkant. Sneltoets: {{hotkeyName}}","mergeRight-tooltip-aria":"Rechts samenvoegen. Combineer het momenteel actieve segment met het segment aan de rechterkant. Sneltoets: {{hotkeyName}}."},"video":{"previewButton":"Voorvertoningsmodus","previewButton-tooltip":"Slaat verwijderde segmenten over tijdens het afspelen van de video. Momenteel {{status}}. Snelkey: {{hotkeyName}}","previewButton-aria":"In- of uitschakelen voorvertoning modus. Sneltoets: {{hotkeyName}}.","playButton-tooltip":"Play video","pauseButton-tooltip":"Pause video","current-time-tooltip":"Actuele tijd","time-duration-tooltip":"Video duration","duration-aria":"Duur","time-aria":"Actuele tijd","comError-text":"Er is een probleem opgetreden tijdens de communicatie met Opencast.","loadError-text":"Er is een fout opgetreden tijdens het laden van deze video.","title-tooltip":"Titel van de video","presenter-tooltip":"Video presentatoren"},"finishMenu":{"save-button":"Wijzigingen opslaan","start-button":"Start verwerking","discard-button":"Annuleren"},"save":{"headline-text":"Huidig project opslaan","confirm-button":"Ja, wijzigingen opslaan","confirmButton-attempting-tooltip":"Bezig met opslaan","confirmButton-success-tooltip":"Succesvol opgeslagen","confirmButton-failed-tooltip":"Opslaan is mislukt","info-text":"De video wordt niet verwerkt, maar alle snijgegevens worden opgeslagen in Opencast. U kunt later doorgaan met uw bewerking.","success-text":"Changes saved successfully! You can now close the editor or continue working.","success-tooltip-aria":"Succesvol opgeslagen","saveArea-tooltip":"Gebied opslaan"},"discard":{"headline-text":"Annuleren","confirm-button":"Ja, wijzigingen negeren","info-text":"Are you sure you want to discard your changes? This cannot be undone!"},"theEnd":{"discarded-text":"Your changes have been discarded. You can now close the editor.","startOver-button":"Opnieuw beginnen!","startOver-tooltip":"Herlaad de pagina om opnieuw te beginnen","info-text":"Changes successfully saved to Opencast. Processing your changes may take quite some time so please be patient. You can now close the editor.\\n"},"workflowSelection":{"saveAndProcess-text":"Opslaan en verwerken","selectWF-text":"Selecteer een workflow","noWorkflows-text":"Er is een probleem opgetreden. Er zijn geen workflows om u wijzigingen te verwerken.<3/> Sla u wijzigingen op en neem contact op met een Opencast beheerder.\\n","oneWorkflow-text":"De video wordt geknipt en verwerkt met de workflow \\"{{workflow}}\\". <3/> Dit kost enige tijd.\\n","manyWorkflows-text":"Selecteer welke workflow Opencast moet gebruiken voor verwerking.","startProcessing-button":"Start verwerking","back-button":"Breng me terug","selectWF-button":"Klik om deze workflow te selecteren","selectWF-button-aria":"Druk om de workflow te selecteren: {{stateName}}\\n"},"timeline":{"generateWaveform-text":"Waveform genereren","segment-tooltip":"Segment {{segment}}","scrubber-text-aria":"Timeline marker. {{currentTime}}. Active segment: {{segment}}. {{segmentStatus}}. Controls: {{moveLeft}} and {{moveRight}} to move the timeline marker. {{increase}} and {{decrease}} to increase/decrase the move delta.\\n","segments-text-aria":"Segment {{index}}. {{segmentStatus}}. Begin: {{start}}. Eindigt: {{end}}.\\n"},"workflowConfig":{"headline-text":"Workflow configuratie","satisfied-text":"Tevreden met je configuratie?","confirm-button":"Ja, begin met verwerken"},"metadata":{"EVENTS-EVENTS-DETAILS-CATALOG-EPISODE":"Aflevering Metadata","submit-button":"Verzenden","submit-button-tooltip":"Wijzigingen bevestigen","reset-button":"Reset","reset-button-tooltip":"Al u wijzigingen ongedaan maken","submit-helpertext":"Maak wijzigingen zoals u wilt, en druk dan op de {{buttonName}} knop.\\nMerk op dat u nog steeds moet beginnen met verwerken om de wijzigingen door te voeren.","validation":{"required":"Verplicht","duration-format":"Formaat moet HH:MM:SS zijn","datetime":"Ongeldig"},"labels":{"title":"Titel","subject":"Onderwerp","description":"Beschrijving","language":"Taal","rightsHolder":"Rechten","license":"Licentie","isPartOf":"Series","creator":"Presentator(en)","contributor":"Bijdrager(s)","startDate":"Startdatum","duration":"Duur","location":"Locatie","source":"Bron","created":"Aangemaakt","publisher":"Uitgever","identifier":"UID"},"language":{"LANGUAGES-SLOVENIAN":"Sloveens","LANGUAGES-PORTUGESE":"Portugees","LANGUAGES-ROMANSH":"Reto-Romaans","LANGUAGES-ARABIC":"Arabisch","LANGUAGES-POLISH":"Pools","LANGUAGES-ITALIAN":"Italiaans","LANGUAGES-CHINESE":"Chinees","LANGUAGES-FINNISH":"Fins","LANGUAGES-DANISH":"Deens","LANGUAGES-UKRAINIAN":"Oekra\xefens","LANGUAGES-FRENCH":"Frans","LANGUAGES-SPANISH":"Spaans","LANGUAGES-GERMAN_CH":"Zwitsers Duits","LANGUAGES-NORWEGIAN":"Noors","LANGUAGES-RUSSIAN":"Russisch","LANGUAGES-JAPANESE":"Japans","LANGUAGES-DUTCH":"Nederlands","LANGUAGES-TURKISH":"Turks","LANGUAGES-HINDI":"Hindi","LANGUAGES-SWEDISH":"Zweeds","LANGUAGES-ENGLISH":"Engels","LANGUAGES-GERMAN":"Duits"},"license":{"EVENTS-LICENSE-CC0":"CC0","EVENTS-LICENSE-CCBYND":"CC-BY-ND","EVENTS-LICENSE-CCBYNCND":"CC-BY-NC-ND","EVENTS-LICENSE-CCBYNCSA":"CC-BY-NC-SA","EVENTS-LICENSE-ALLRIGHTS":"Alle rechten voorbehouden","EVENTS-LICENSE-CCBYSA":"CC-BY-SA","EVENTS-LICENSE-CCBYNC":"CC-BY-NC","EVENTS-LICENSE-CCBY":"CC-BY"},"calendar-prev":"Previous","calendar-next":"Next"},"thumbnail":{"title":"Thumbnail Editor","noThumbnailAvailable":"No Thumbnail available","previewImageAlt":"Thumbnail for track","buttonGenerate":"Generate","buttonGenerate-tooltip":"Generate a new thumbnail from the current timeline marker position","buttonGenerate-tooltip-aria":"Generate a new thumbnail from the current timeline marker position","buttonUpload":"Upload","buttonUpload-tooltip":"Upload an image","buttonUpload-tooltip-aria":"Upload an image","buttonUseForOtherThumbnails":"Use for all tracks","buttonUseForOtherThumbnails-tooltip":"Use the thumbnail for all tracks","buttonUseForOtherThumbnails-tooltip-aria":"Use the thumbnail for all tracks","buttonDiscard":"Discard","buttonDiscard-tooltip":"Discard the thumbnail for this track","buttonDiscard-tooltip-aria":"Discard the thumbnail for this track","buttonGenerateAll":"Generate All","buttonGenerateAll-tooltip":"Generate new thumbnails for all tracks from the current timeline marker position","buttonGenerateAll-tooltip-aria":"Generate new thumbnails for all tracks from the current timeline marker position","explanation":"Upload or generate a thumbnail for each track.","primary":"Primary","secondary":"Secondary"},"thumbnailSimple":{"rowTitle":"Change thumbnail here","from":"from"},"error":{"generic-message":"Er is een kritische fout opgetreden!","details":"Details: ","workflowActive-errorTitle":"Temporarily unavailable","workflowActive-errorMessage":"This event is being processed. Please wait until the process is finished."},"landing":{"main-heading":"Welkom in de Video Editor","contact-admin":"Als u een specifieke video probeerde te bewerken maar deze pagina ziet, neem dan contact op met uw beheerder.","start-editing-1":"Om te beginnen met bewerken, geef de parameter aan ","start-editing-2":" met het ID van het media-pakket van de video die u wilt bewerken.","link-to-documentation":"Er is meer informatie over het configureren van de video-editor beschikbaar in de beheergids op "},"various":{"error-details-text":"Details: {{errorMessage}}\\n","error-text":"Er is een fout opgetreden. Wacht even en probeer het opnieuw.","goBack-button":"Nee, breng me terug"},"trackSelection":{"description":"Selecteer of deselecteer welke sporen worden gebruikt voor verwerking en publicatie.","trackInactive":"inactief","deleteTrackText":"Verwijder spoor","restoreTrackText":"Herstel spoor","cannotDeleteTrackText":"Spoor kan niet verwijdert worden","deleteTrackTooltip":"Deze spoor niet coderen en publiceren.","restoreTrackTooltip":"Encodeer en publiceer deze spoor.","cannotDeleteTrackTooltip":"Kan deze spoor niet uit de publicatie verwijderen."},"subtitles":{"selectSubtitleButton-tooltip":"Edit subtitles for {{title}}","selectSubtitleButton-tooltip-aria":"Select {{title}} for subtitle editing","createSubtitleButton-tooltip":"Opens a dialog for creating new subtitles","createSubtitleButton-clicked-tooltip-aria":"Contains a dialog for creating new subtitles","createSubtitleButton-createButton":"Create","createSubtitleButton-createButton-tooltip":"Start a new subtitle file with the chosen title.","createSubtitleDropdown-label":"Pick a language","backButton":"Back","backButton-tooltip":"Return to subtitle selection","editTitle":"Subtitle Editor - {{title}}","editTitle-loading":"Loading","generic":"Generic"},"subtitleList":{"startTime-tooltip":"Beginning of the segment","startTime-tooltip-aria":"Beginning at","endTime-tooltip":"End of the segment","endTime-tooltip-aria":"Ending at","addSegmentAbove":"Add segment above","addSegmentBelow":"Add segment below","jumpToSegmentAbove":"Jump to segment above","jumpToSegmentBelow":"Jump to segment below","deleteSegment":"Delete segment"},"subtitleVideoArea":{"selectVideoLabel":"Video Flavors"},"subtitleTimeline":{"overviewTimelineTooltip":"Timeline overview"},"keyboardControls":{"header":"Keyboard Controls","defaultGroupName":"General","missingLabel":"Unknown","groupVideoPlayer":"Video Player","groupCuttingView":"Knippen","groupCuttingViewScrubber":"Timeline","groupSubtitleList":"Subtitles","sequenceSeperator":"or","genericError":"Failed to load overview","videoPlayButton":"Play/Pause Video","scrubberLeft":"Move left","scrubberRight":"Move right","scubberIncrease":"Move faster","scrubberDecrease":"Move slower"},"theme":{"appearance":"Appearance","selectThemesLabel":"Appearances","darkmode":"Dark mode","lightmode":"Light mode","system":"System design","high-contrast-dark":"High contrast (Dark mode)","high-contrast-light":"High contrast (Light mode)"}}')}}]);