const e={"cutting-button":"Cutting","finish-button":"Finish","select-tracks-button":"Tracks","subtitles-button":"Subtitles","thumbnail-button":"Thumbnail","metadata-button":"Metadata","keyboard-controls-button":"Keyboard Controls","tooltip-aria":"Main Navigation"},t={"cut-button":"Cut","cut-tooltip":"Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}","cut-tooltip-aria":"Cut. Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}.","delete-button":"Delete","delete-restore-tooltip":"Mark or unmark the segment at the current position as to be deleted. Hotkey: {{hotkeyName}}","delete-restore-tooltip-aria":"Delete and Restore. Mark or unmark the segment at the current position as to be deleted. Hotkey: {{hotkeyName}}.","merge-all-button":"Merge All","merge-all-tooltip":"Combine all segments into a single segment.","merge-all-tooltip-aria":"Merge All. Combine all segments into a single segment.","restore-button":"Restore","mergeLeft-button":"Merge Left","mergeLeft-tooltip":"Combine the currently active segment with the segment to its left. Hotkey: {{hotkeyName}}","mergeLeft-tooltip-aria":"Merge Left. Combine the currently active segment with the segment to its left. Hotkey: {{hotkeyName}}.","mergeRight-button":"Merge Right","mergeRight-tooltip":"Combine the currently active segment with the segment to its right. Hotkey: {{hotkeyName}}","mergeRight-tooltip-aria":"Merge Right. Combine the currently active segment with the segment to its right. Hotkey: {{hotkeyName}}."},o={previewButton:"Preview Mode","previewButton-tooltip":"Skips deleted segments when playing the video. Currently {{status}}. Hotkey: {{hotkeyName}}","previewButton-aria":"Enable or disable preview mode. Hotkey: {{hotkeyName}}.","playButton-tooltip":"Play video","pauseButton-tooltip":"Pause video","current-time-tooltip":"Current time","time-duration-tooltip":"Video duration","duration-aria":"Duration","time-aria":"Current time","mutebutton-tooltip":"Mute video","unmutebutton-tooltip":"Unmute video","volume-tooltip":"Adjust volume: {{current}}%","volumeSlider-aria":"Adjust the volume level of the video.","comError-text":"A problem occurred during communication with Opencast.","loadError-text":"An error has occurred loading this video.","durationError-text":"Opencast failed to provide the video duration.","title-tooltip":"Video Title","presenter-tooltip":"Video Presenters"},i={"save-button":"Save changes","start-button":"Start processing","discard-button":"Discard changes"},a={"headline-text":"Save current project","confirm-button":"Yes, save changes","confirmButton-attempting-tooltip":"Attempting to save","confirmButton-success-tooltip":"Saved successfully","confirmButton-failed-tooltip":"Save failed","info-text":"The video will not be processed but all cutting information will be stored in Opencast. You can continue your edit later.","success-text":"Changes saved successfully! You can now close the editor or continue working.","success-tooltip-aria":"Saved successfully","saveArea-tooltip":"Save Area","confirm-success":"Okay","cancel-save":"Don't save"},n={"headline-text":"Discard changes","confirm-button":"Yes, discard changes","info-text":"Are you sure you want to discard your changes? This cannot be undone!"},r={"discarded-text":"Your changes have been discarded. You can now close the editor.","startOver-button":"Let me start over!","startOver-tooltip":"Reload the page to start over","info-text":`Changes successfully saved to Opencast. Processing your changes may take quite some time so please be patient. You can now close the editor.
`},s={"saveAndProcess-text":"Save and Process","selectWF-text":"Select a workflow","noWorkflows-text":`There are no workflows to process your changes with. Please save your changes and contact an administrator.
`,"oneWorkflow-text":`The video will be cut and processed with the workflow "{{workflow}}". <3/> This will take some time.
`,"manyWorkflows-text":"Select which workflow Opencast should use for processing.","startProcessing-button":"Start processing","back-button":"Take me back","selectWF-button":"Click to select this workflow","selectWF-button-aria":`Press to select the workflow: {{stateName}}
`},l={"generateWaveform-text":"Generating Waveform","segment-tooltip":"Segment {{segment}}","scrubber-text-aria":`Timeline marker. {{currentTime}}. Active segment: {{segment}}. {{segmentStatus}}. Controls: {{moveLeft}} and {{moveRight}} to move the timeline marker. {{increase}} and {{decrease}} to increase/decrease the move delta.
`,"segments-text-aria":`Segment {{index}}. {{segmentStatus}}. Start: {{start}}. End: {{end}}.
`},u={"headline-text":"Workflow Configuration","satisfied-text":"Satisfied with your configuration?","confirm-button":"Yes, start processing"},c={"EVENTS-EVENTS-DETAILS-CATALOG-EPISODE":"Episode Metadata","submit-button":"Submit","submit-button-tooltip":"Confirm your changes","reset-button":"Reset","reset-button-tooltip":"Undo all your changes","submit-helpertext":`Make changes as you like, then hit the {{buttonName}} button.
Note that you will still have to start processing for your changes to take effect.`,validation:{required:"Required","duration-format":"Format must be HH:MM:SS",datetime:"Invalid"},labels:{title:"Title",subject:"Subject",description:"Description",language:"Language",rightsHolder:"Rights",license:"License",isPartOf:"Series",creator:"Presenter(s)",contributor:"Contributor(s)",startDate:"Start date",duration:"Duration",location:"Location",source:"Source",created:"Created",publisher:"Publisher",identifier:"UID"},language:{"LANGUAGES-SLOVENIAN":"Slovenian","LANGUAGES-PORTUGESE":"Portuguese","LANGUAGES-ROMANSH":"Romansh","LANGUAGES-ARABIC":"Arabic","LANGUAGES-POLISH":"Polish","LANGUAGES-ITALIAN":"Italian","LANGUAGES-CHINESE":"Chinese","LANGUAGES-FINNISH":"Finnish","LANGUAGES-DANISH":"Danish","LANGUAGES-UKRAINIAN":"Ukrainian","LANGUAGES-FRENCH":"French","LANGUAGES-SPANISH":"Spanish","LANGUAGES-GERMAN_CH":"Swiss German","LANGUAGES-NORWEGIAN":"Norwegian","LANGUAGES-RUSSIAN":"Russian","LANGUAGES-JAPANESE":"Japanese","LANGUAGES-DUTCH":"Dutch","LANGUAGES-TURKISH":"Turkish","LANGUAGES-HINDI":"Hindi","LANGUAGES-SWEDISH":"Swedish","LANGUAGES-ENGLISH":"English","LANGUAGES-GERMAN":"German"},license:{"EVENTS-LICENSE-CC0":"CC0","EVENTS-LICENSE-CCBYND":"CC-BY-ND","EVENTS-LICENSE-CCBYNCND":"CC-BY-NC-ND","EVENTS-LICENSE-CCBYNCSA":"CC-BY-NC-SA","EVENTS-LICENSE-ALLRIGHTS":"All rights reserved","EVENTS-LICENSE-CCBYSA":"CC-BY-SA","EVENTS-LICENSE-CCBYNC":"CC-BY-NC","EVENTS-LICENSE-CCBY":"CC-BY"},"calendar-prev":"Previous","calendar-next":"Next"},d={title:"Thumbnail Editor",noThumbnailAvailable:"No Thumbnail available",previewImageAlt:"Thumbnail for track",buttonGenerate:"Generate","buttonGenerate-tooltip":"Generate a new thumbnail from the current timeline marker position","buttonGenerate-tooltip-aria":"Generate a new thumbnail from the current timeline marker position",buttonUpload:"Upload","buttonUpload-tooltip":"Upload an image","buttonUpload-tooltip-aria":"Upload an image",buttonUseForOtherThumbnails:"Use for all tracks","buttonUseForOtherThumbnails-tooltip":"Use the thumbnail for all tracks","buttonUseForOtherThumbnails-tooltip-aria":"Use the thumbnail for all tracks",buttonDiscard:"Discard","buttonDiscard-tooltip":"Discard the thumbnail for this track","buttonDiscard-tooltip-aria":"Discard the thumbnail for this track",buttonGenerateAll:"Generate All","buttonGenerateAll-tooltip":"Generate new thumbnails for all tracks from the current timeline marker position","buttonGenerateAll-tooltip-aria":"Generate new thumbnails for all tracks from the current timeline marker position",explanation:"Upload or generate a thumbnail for each track.",primary:"Primary",secondary:"Secondary"},m={rowTitle:"Change thumbnail here",from:"from"},h={"generic-message":"A critical error has occurred!",details:"Details: ","workflowActive-errorTitle":"Temporarily unavailable","workflowActive-errorMessage":"This event is being processed. Please wait until the process is finished."},g={"main-heading":"Welcome to the Video Editor","contact-admin":"If you were trying to edit a specific video but are seeing this page, please contact your administrator.","start-editing-1":"To start editing, specify the parameter ","start-editing-2":" with the media package id of the video you wish to edit.","link-to-documentation":"More information about configuring the video editor is available in the administration guide at "},b={"error-details-text":`Details: {{errorMessage}}
`,"error-text":"An error has occurred. Please wait a bit and try again.","goBack-button":"No, take me back","callback-button-system":"Back to {{system}}","callback-button-generic":"Back to previous system"},p={title:"Select track(s) for processing",trackInactive:"inactive",deleteTrackText:"Delete Track",restoreTrackText:"Restore Track",cannotDeleteTrackText:"Cannot Delete Track",deleteTrackTooltip:"Do not encode and publish this track.",restoreTrackTooltip:"Encode and publish this track.",cannotDeleteTrackTooltip:"Cannot remove this track from publication."},S={"selectSubtitleButton-tooltip":"Edit subtitles for {{title}}","selectSubtitleButton-tooltip-aria":"Select {{title}} for subtitle editing","createSubtitleButton-tooltip":"Opens a dialog for creating new subtitles","createSubtitleButton-clicked-tooltip-aria":"Contains a dialog for creating new subtitles","createSubtitleButton-createButton":"Create","createSubtitleButton-createButton-tooltip":"Start a new subtitle file with the chosen title.","createSubtitleButton-createButton-disabled-tooltip":"Please pick a language from the dropdown above.","createSubtitleDropdown-label":"Pick a language",backButton:"Back","backButton-tooltip":"Return to subtitle selection","downloadButton-title":"Download","downloadButton-tooltip":"Download subtitle as vtt file",editTitle:"Subtitle Editor - {{title}}","editTitle-loading":"Loading",generic:"Generic",autoGenerated:"Auto-generated"},k={"startTime-tooltip":"Beginning of the segment","startTime-tooltip-aria":"Beginning at","endTime-tooltip":"End of the segment","endTime-tooltip-aria":"Ending at",addSegmentAbove:"Add segment above",addSegmentBelow:"Add segment below",jumpToSegmentAbove:"Jump to segment above",jumpToSegmentBelow:"Jump to segment below",deleteSegment:"Delete segment"},A={selectVideoLabel:"Video Flavors"},f={overviewTimelineTooltip:"Timeline overview"},v={header:"Shortcuts",defaultGroupName:"General",missingLabel:"Unknown",groupVideoPlayer:"Video Player",groupCuttingView:"Cutting",groupCuttingViewScrubber:"Timeline",groupSubtitleList:"Subtitles",sequenceSeparator:"or",genericError:"Failed to load overview",videoPlayButton:"Play/Pause Video",scrubberLeft:"Move left",scrubberRight:"Move right",scrubberIncrease:"Move faster",scrubberDecrease:"Move slower"},E={appearance:"Appearance",dark:"Dark",light:"Light",auto:"Auto","dark-high-contrast":"Dark (High contrast)","light-high-contrast":"Light (High contrast)"},w={language:"Language"},N={mainMenu:e,cuttingActions:t,video:o,finishMenu:i,save:a,discard:n,theEnd:r,workflowSelection:s,timeline:l,workflowConfig:u,metadata:c,thumbnail:d,thumbnailSimple:m,error:h,landing:g,various:b,trackSelection:p,subtitles:S,subtitleList:k,subtitleVideoArea:A,subtitleTimeline:f,keyboardControls:v,theme:E,language:w};export{t as cuttingActions,N as default,n as discard,h as error,i as finishMenu,v as keyboardControls,g as landing,w as language,e as mainMenu,c as metadata,a as save,k as subtitleList,f as subtitleTimeline,A as subtitleVideoArea,S as subtitles,r as theEnd,E as theme,d as thumbnail,m as thumbnailSimple,l as timeline,p as trackSelection,b as various,o as video,u as workflowConfig,s as workflowSelection};
