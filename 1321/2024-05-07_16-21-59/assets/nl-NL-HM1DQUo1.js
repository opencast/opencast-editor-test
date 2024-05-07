const e={"cutting-button":"Knippen","finish-button":"Opslaan","select-tracks-button":"Sporen","subtitles-button":"Subtitles","thumbnail-button":"Miniatuurafbeelding","metadata-button":"Metadata","keyboard-controls-button":"Keyboard Controls","tooltip-aria":"Hoofdnavigatie"},t={"cut-button":"Knippen","cut-tooltip":"Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}","cut-tooltip-aria":"Cut. Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}.","delete-button":"Verwijder","delete-restore-tooltip":"Markeer of verwijder het segment op de huidige positie om te worden verwijderd. Sneltoets: {{hotkeyName}}","delete-restore-tooltip-aria":"Delete and Restore. Mark or unmark the segment at the current position as to be deleted. Hotkey: {{hotkeyName}}.","merge-all-button":"Merge All","merge-all-tooltip":"Combine all segments into a single segment.","merge-all-tooltip-aria":"Merge All. Combine all segments into a single segment.","restore-button":"Herstellen","mergeLeft-button":"Links samenvoegen","mergeLeft-tooltip":"Combineer het momenteel actieve segment met het segment aan de linkerkant. Sneltoets: {{hotkeyName}}","mergeLeft-tooltip-aria":"Links samenvoegen. Combineer het momenteel actieve segment met het segment aan de linkerkant. Sneltoets: {{hotkeyName}}.","mergeRight-button":"Rechts samenvoegen","mergeRight-tooltip":"Combineer het momenteel actieve segment met het segment aan de rechterkant. Sneltoets: {{hotkeyName}}","mergeRight-tooltip-aria":"Rechts samenvoegen. Combineer het momenteel actieve segment met het segment aan de rechterkant. Sneltoets: {{hotkeyName}}."},o={previewButton:"Voorvertoningsmodus","previewButton-tooltip":"Slaat verwijderde segmenten over tijdens het afspelen van de video. Momenteel {{status}}. Snelkey: {{hotkeyName}}","previewButton-aria":"In- of uitschakelen voorvertoning modus. Sneltoets: {{hotkeyName}}.","playButton-tooltip":"Play video","pauseButton-tooltip":"Pause video",previousButton:"Back","previousButton-tooltip":"Back. Hotkey: {{hotkeyName}}.",nextButton:"Forward","nextButton-tooltip":"Forward. Hotkey: {{hotkeyName}}.","current-time-tooltip":"Actuele tijd","time-duration-tooltip":"Video duration","duration-aria":"Duur","time-aria":"Actuele tijd","mutebutton-tooltip":"Mute video","unmutebutton-tooltip":"Unmute video","volume-tooltip":"Adjust volume: {{current}}%","volumeSlider-aria":"Adjust the volume level of the video.","comError-text":"Er is een probleem opgetreden tijdens de communicatie met Opencast.","loadError-text":"Er is een fout opgetreden tijdens het laden van deze video.","durationError-text":"Opencast failed to provide the video duration.","title-tooltip":"Titel van de video","presenter-tooltip":"Video presentatoren"},n={"save-button":"Wijzigingen opslaan","start-button":"Save and process changes","discard-button":"Annuleren"},i={"headline-text":"Huidig project opslaan","confirm-button":"Ja, wijzigingen opslaan","confirmButton-attempting-tooltip":"Bezig met opslaan","confirmButton-success-tooltip":"Succesvol opgeslagen","confirmButton-failed-tooltip":"Opslaan is mislukt","info-text":"De video wordt niet verwerkt, maar alle snijgegevens worden opgeslagen in Opencast. U kunt later doorgaan met uw bewerking.","success-text":"Changes saved successfully! You can now close the editor or continue working.","success-tooltip-aria":"Succesvol opgeslagen","saveArea-tooltip":"Gebied opslaan","confirm-success":"Okay","cancel-save":"Don't save"},a={"headline-text":"Annuleren","confirm-button":"Ja, wijzigingen negeren","info-text":"Are you sure you want to discard your changes? This cannot be undone!"},r={"discarded-text":"Your changes have been discarded. You can now close the editor.","startOver-button":"Opnieuw beginnen!","startOver-tooltip":"Herlaad de pagina om opnieuw te beginnen","info-text":`Changes successfully saved to Opencast. Processing your changes may take quite some time so please be patient. You can now close the editor.
`},s={"saveAndProcess-text":"Opslaan en verwerken","selectWF-text":"Selecteer een workflow","noWorkflows-text":`There are no workflows to process your changes with. Please save your changes and contact an administrator.
`,"oneWorkflow-text":`The changes will be saved and the video will be cut and processed with the workflow "{{workflow}}". <3/> This will take some time.
`,"manyWorkflows-text":"Selecteer welke workflow Opencast moet gebruiken voor verwerking.","startProcessing-button":"Start verwerking","back-button":"Breng me terug","selectWF-button":"Klik om deze workflow te selecteren","selectWF-button-aria":`Druk om de workflow te selecteren: {{stateName}}
`},l={"generateWaveform-text":"Waveform genereren","segment-tooltip":"Segment {{segment}}","scrubber-text-aria":`Timeline marker. {{currentTime}}. Active segment: {{segment}}. {{segmentStatus}}. Controls: {{moveLeft}} and {{moveRight}} to move the timeline marker. {{increase}} and {{decrease}} to increase/decrease the move delta.
`,"segments-text-aria":`Segment {{index}}. {{segmentStatus}}. Begin: {{start}}. Eindigt: {{end}}.
`,"cut-text-aria":`Cut marker. {{time}}. Between segment {{leftSegment}} and {{rightSegment}}.
`},u={"headline-text":"Workflow configuratie","satisfied-text":"Tevreden met je configuratie?","confirm-button":"Ja, begin met verwerken"},c={"EVENTS-EVENTS-DETAILS-CATALOG-EPISODE":"Aflevering Metadata","submit-button":"Verzenden","submit-button-tooltip":"Wijzigingen bevestigen","reset-button":"Reset","reset-button-tooltip":"Al u wijzigingen ongedaan maken","submit-helpertext":`Maak wijzigingen zoals u wilt, en druk dan op de {{buttonName}} knop.
Merk op dat u nog steeds moet beginnen met verwerken om de wijzigingen door te voeren.`,validation:{required:"Verplicht","duration-format":"Formaat moet HH:MM:SS zijn",datetime:"Ongeldig"},labels:{title:"Titel",subject:"Onderwerp",description:"Beschrijving",language:"Taal",rightsHolder:"Rechten",license:"Licentie",isPartOf:"Series",creator:"Presentator(en)",contributor:"Bijdrager(s)",startDate:"Startdatum",duration:"Duur",location:"Locatie",source:"Bron",created:"Aangemaakt",publisher:"Uitgever",identifier:"UID"},language:{"LANGUAGES-SLOVENIAN":"Sloveens","LANGUAGES-PORTUGESE":"Portuguese","LANGUAGES-ROMANSH":"Reto-Romaans","LANGUAGES-ARABIC":"Arabisch","LANGUAGES-POLISH":"Pools","LANGUAGES-ITALIAN":"Italiaans","LANGUAGES-CHINESE":"Chinees","LANGUAGES-FINNISH":"Fins","LANGUAGES-DANISH":"Deens","LANGUAGES-UKRAINIAN":"Oekraïens","LANGUAGES-FRENCH":"Frans","LANGUAGES-SPANISH":"Spaans","LANGUAGES-GERMAN_CH":"Zwitsers Duits","LANGUAGES-NORWEGIAN":"Noors","LANGUAGES-RUSSIAN":"Russisch","LANGUAGES-JAPANESE":"Japans","LANGUAGES-DUTCH":"Nederlands","LANGUAGES-TURKISH":"Turks","LANGUAGES-HINDI":"Hindi","LANGUAGES-SWEDISH":"Zweeds","LANGUAGES-ENGLISH":"Engels","LANGUAGES-GERMAN":"Duits"},license:{"EVENTS-LICENSE-CC0":"CC0","EVENTS-LICENSE-CCBYND":"CC-BY-ND","EVENTS-LICENSE-CCBYNCND":"CC-BY-NC-ND","EVENTS-LICENSE-CCBYNCSA":"CC-BY-NC-SA","EVENTS-LICENSE-ALLRIGHTS":"Alle rechten voorbehouden","EVENTS-LICENSE-CCBYSA":"CC-BY-SA","EVENTS-LICENSE-CCBYNC":"CC-BY-NC","EVENTS-LICENSE-CCBY":"CC-BY"},"calendar-prev":"Previous","calendar-next":"Next"},d={title:"Thumbnail Editor",noThumbnailAvailable:"No Thumbnail available",previewImageAlt:"Thumbnail for track",buttonGenerate:"Generate","buttonGenerate-tooltip":"Generate a new thumbnail from the current timeline marker position","buttonGenerate-tooltip-aria":"Generate a new thumbnail from the current timeline marker position",buttonUpload:"Upload","buttonUpload-tooltip":"Upload an image","buttonUpload-tooltip-aria":"Upload an image",buttonUseForOtherThumbnails:"Use for all tracks","buttonUseForOtherThumbnails-tooltip":"Use the thumbnail for all tracks","buttonUseForOtherThumbnails-tooltip-aria":"Use the thumbnail for all tracks",buttonDiscard:"Discard","buttonDiscard-tooltip":"Discard the thumbnail for this track","buttonDiscard-tooltip-aria":"Discard the thumbnail for this track",buttonGenerateAll:"Generate All","buttonGenerateAll-tooltip":"Generate new thumbnails for all tracks from the current timeline marker position","buttonGenerateAll-tooltip-aria":"Generate new thumbnails for all tracks from the current timeline marker position",explanation:"Upload or generate a thumbnail for each track.",primary:"Primary",secondary:"Secondary"},m={rowTitle:"Change thumbnail here",from:"from"},g={"generic-message":"Er is een kritische fout opgetreden!",details:"Details: ","workflowActive-errorTitle":"Temporarily unavailable","workflowActive-errorMessage":"This event is being processed. Please wait until the process is finished."},p={"main-heading":"Welkom in de Video Editor","contact-admin":"Als u een specifieke video probeerde te bewerken maar deze pagina ziet, neem dan contact op met uw beheerder.","start-editing-1":"Om te beginnen met bewerken, geef de parameter aan ","start-editing-2":" met het ID van het media-pakket van de video die u wilt bewerken.","link-to-documentation":"Er is meer informatie over het configureren van de video-editor beschikbaar in de beheergids op "},b={"error-details-text":`Details: {{errorMessage}}
`,"error-text":"Er is een fout opgetreden. Wacht even en probeer het opnieuw.","goBack-button":"Nee, breng me terug","callback-button-system":"Back to {{system}}","callback-button-generic":"Back to previous system"},h={title:"Select track(s) for processing",trackInactive:"inactief",deleteTrackText:"Verwijder spoor",restoreTrackText:"Herstel spoor",cannotDeleteTrackText:"Spoor kan niet verwijdert worden",deleteTrackTooltip:"Deze spoor niet coderen en publiceren.",restoreTrackTooltip:"Encodeer en publiceer deze spoor.",cannotDeleteTrackTooltip:"Kan deze spoor niet uit de publicatie verwijderen."},k={"selectSubtitleButton-tooltip":"Edit subtitles for {{title}}","selectSubtitleButton-tooltip-aria":"Select {{title}} for subtitle editing","createSubtitleButton-tooltip":"Opens a dialog for creating new subtitles","createSubtitleButton-clicked-tooltip-aria":"Contains a dialog for creating new subtitles","createSubtitleButton-createButton":"Create","createSubtitleButton-createButton-tooltip":"Start a new subtitle file with the chosen title.","createSubtitleButton-createButton-disabled-tooltip":"Please pick a language from the dropdown above.","createSubtitleDropdown-label":"Pick a language",backButton:"Back","backButton-tooltip":"Return to subtitle selection","downloadButton-title":"Download","downloadButton-tooltip":"Download subtitle as vtt file",editTitle:"Subtitle Editor - {{title}}","editTitle-loading":"Loading",generic:"Generic",autoGenerated:"Auto-generated"},v={"startTime-tooltip":"Beginning of the segment","startTime-tooltip-aria":"Beginning at","endTime-tooltip":"End of the segment","endTime-tooltip-aria":"Ending at",addSegmentAbove:"Add segment above",addSegmentBelow:"Add segment below",jumpToSegmentAbove:"Jump to segment above",jumpToSegmentBelow:"Jump to segment below",deleteSegment:"Delete segment"},S={selectVideoLabel:"Video Flavors"},w={overviewTimelineTooltip:"Timeline overview"},A={header:"Shortcuts",defaultGroupName:"General",missingLabel:"Unknown",groupVideoPlayer:"Video Player",groupCuttingView:"Knippen",groupCuttingViewScrubber:"Timeline",groupSubtitleList:"Subtitles",sequenceSeparator:"or",genericError:"Failed to load overview",videoPlayButton:"Play/Pause Video",scrubberLeft:"Move left",scrubberRight:"Move right",scrubberIncrease:"Move faster",scrubberDecrease:"Move slower"},f={appearance:"Appearance",dark:"Dark",light:"Light",auto:"Auto","dark-high-contrast":"Dark (High contrast)","light-high-contrast":"Light (High contrast)"},E={language:"Taal"},N={mainMenu:e,cuttingActions:t,video:o,finishMenu:n,save:i,discard:a,theEnd:r,workflowSelection:s,timeline:l,workflowConfig:u,metadata:c,thumbnail:d,thumbnailSimple:m,error:g,landing:p,various:b,trackSelection:h,subtitles:k,subtitleList:v,subtitleVideoArea:S,subtitleTimeline:w,keyboardControls:A,theme:f,language:E};export{t as cuttingActions,N as default,a as discard,g as error,n as finishMenu,A as keyboardControls,p as landing,E as language,e as mainMenu,c as metadata,i as save,v as subtitleList,w as subtitleTimeline,S as subtitleVideoArea,k as subtitles,r as theEnd,f as theme,d as thumbnail,m as thumbnailSimple,l as timeline,h as trackSelection,b as various,o as video,u as workflowConfig,s as workflowSelection};
