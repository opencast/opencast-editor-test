const t={"cutting-button":"裁剪","finish-button":"完成","select-tracks-button":"影音軌道","subtitles-button":"Subtitles","thumbnail-button":"縮圖","metadata-button":"後設資料","keyboard-controls-button":"鍵盤控制","tooltip-aria":"主導航"},e={"cut-button":"裁剪","cut-tooltip":"Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}","cut-tooltip-aria":"Cut. Split the segment at the current timeline marker position. Hotkey: {{hotkeyName}}.","delete-button":"刪除","delete-restore-tooltip":"在當前位置標記或取消標記要刪除的區段。 熱鍵：{{hotkeyName}}","delete-restore-tooltip-aria":"Delete and Restore. Mark or unmark the segment at the current position as to be deleted. Hotkey: {{hotkeyName}}.","merge-all-button":"Merge All","merge-all-tooltip":"Combine all segments into a single segment.","merge-all-tooltip-aria":"Merge All. Combine all segments into a single segment.","restore-button":"還原","mergeLeft-button":"左合併","mergeLeft-tooltip":"將當前活動區段與其左側的區段合併。 熱鍵：{{hotkeyName}}","mergeLeft-tooltip-aria":"左合併。 將當前活動區段與其左側的區段合併。 熱鍵：{{hotkeyName}}。","mergeRight-button":"右合併","mergeRight-tooltip":"將當前活動區段與其右側的區段合併。 熱鍵：{{hotkeyName}}","mergeRight-tooltip-aria":"右合併。將當前活動區段與其右側的區段合併。 熱鍵：{{hotkeyName}}"},o={previewButton:"預覽模式","previewButton-tooltip":"播放影片時跳過已刪除的片段。 當前 {{status}}。 熱鍵：{{hotkeyName}}","previewButton-aria":"啟用或禁用預覽模式。 熱鍵：{{hotkeyName}}。","playButton-tooltip":"Play video","pauseButton-tooltip":"Pause video",previousButton:"Back","previousButton-tooltip":"Back. Hotkey: {{hotkeyName}}.",nextButton:"Forward","nextButton-tooltip":"Forward. Hotkey: {{hotkeyName}}.","current-time-tooltip":"目前時間","time-duration-tooltip":"Video duration","duration-aria":"持續時間","time-aria":"目前時間","mutebutton-tooltip":"Mute video","unmutebutton-tooltip":"Unmute video","volume-tooltip":"Adjust volume: {{current}}%","volumeSlider-aria":"Adjust the volume level of the video.","comError-text":"與 Opencast 通訊時出現問題。","loadError-text":"載入此影片時出現錯誤。","durationError-text":"Opencast failed to provide the video duration.","title-tooltip":"影片標題","presenter-tooltip":"影片簡報者"},a={"save-button":"儲存變更","start-button":"Save and process changes","discard-button":"放棄變更"},i={"headline-text":"儲存目前專案","confirm-button":"是的，儲存變更","confirmButton-attempting-tooltip":"嘗試儲存","confirmButton-success-tooltip":"儲存成功","confirmButton-failed-tooltip":"儲存失敗","info-text":"影片不會被處理，但所有裁剪訊息都將存儲在 Opencast 中。 您可以稍後繼續編輯。","success-text":"Changes saved successfully! You can now close the editor or continue working.","success-tooltip-aria":"儲存成功","saveArea-tooltip":"儲存區域","confirm-success":"Okay","cancel-save":"Don't save"},n={"headline-text":"放棄變更","confirm-button":"是的，放棄變更","info-text":"Are you sure you want to discard your changes? This cannot be undone!"},r={"discarded-text":"Your changes have been discarded. You can now close the editor.","startOver-button":"讓我重新開始！","startOver-tooltip":"重新載入頁面以重新開始","info-text":`Changes successfully saved to Opencast. Processing your changes may take quite some time so please be patient. You can now close the editor.
`},l={"saveAndProcess-text":"儲存和處理","selectWF-text":"選擇工作流程","noWorkflows-text":`There are no workflows to process your changes with. Please save your changes and contact an administrator.
`,"oneWorkflow-text":`The changes will be saved and the video will be cut and processed with the workflow "{{workflow}}". <3/> This will take some time.
`,"manyWorkflows-text":"選擇 Opencast 應該使用哪個工作流程進行處理。","startProcessing-button":"開始處理","back-button":"回到上一步","selectWF-button":"單擊以選擇此工作流程","selectWF-button-aria":`按下要選擇的工作流程：{{stateName}}
`},s={"generateWaveform-text":"生成波形","segment-tooltip":"片段{{segment}}","scrubber-text-aria":`Timeline marker. {{currentTime}}. Active segment: {{segment}}. {{segmentStatus}}. Controls: {{moveLeft}} and {{moveRight}} to move the timeline marker. {{increase}} and {{decrease}} to increase/decrease the move delta.
`,"segments-text-aria":`片段 {{index}}. {{segmentStatus}}. 開始: {{start}}. 結束: {{end}}.
`,"cut-text-aria":`Cut marker. {{time}}. Between segment {{leftSegment}} and {{rightSegment}}.
`},u={"headline-text":"工作流程配置","satisfied-text":"對您的配置滿意嗎？","confirm-button":"是的，開始處理"},c={"EVENTS-EVENTS-DETAILS-CATALOG-EPISODE":"劇集後設資料","submit-button":"提交","submit-button-tooltip":"確認您的變更","reset-button":"重置","reset-button-tooltip":"取消所有更改","submit-helpertext":`根據需要進行更改，然後點擊 {{buttonName}} 按鈕。
請注意，您仍然必須開始處理才能使更改生效。`,validation:{required:"必須的","duration-format":"格式必須為 HH:MM:SS",datetime:"不合法"},labels:{title:"標題",subject:"主旨",description:"描述",language:"語言",rightsHolder:"版權所有人",license:"版權",isPartOf:"系列",creator:"演講者",contributor:"貢獻者",startDate:"開始日期",duration:"持續時間",location:"位置",source:"來源",created:"建立",publisher:"發行人",identifier:"UID"},language:{"LANGUAGES-SLOVENIAN":"斯洛文尼亞語","LANGUAGES-PORTUGESE":"Portuguese","LANGUAGES-ROMANSH":"羅曼什語","LANGUAGES-ARABIC":"阿拉伯語","LANGUAGES-POLISH":"波蘭語","LANGUAGES-ITALIAN":"意大利語","LANGUAGES-CHINESE":"繁體中文","LANGUAGES-FINNISH":"芬蘭語","LANGUAGES-DANISH":"丹麥語","LANGUAGES-UKRAINIAN":"烏克蘭","LANGUAGES-FRENCH":"法語","LANGUAGES-SPANISH":"西班牙語","LANGUAGES-GERMAN_CH":"瑞士德語","LANGUAGES-NORWEGIAN":"挪威","LANGUAGES-RUSSIAN":"俄語","LANGUAGES-JAPANESE":"日語","LANGUAGES-DUTCH":"荷蘭語","LANGUAGES-TURKISH":"土耳其語","LANGUAGES-HINDI":"印度語","LANGUAGES-SWEDISH":"瑞典語","LANGUAGES-ENGLISH":"英語","LANGUAGES-GERMAN":"德語"},license:{"EVENTS-LICENSE-CC0":"創作共享 CC0","EVENTS-LICENSE-CCBYND":"CC-BY-ND 創作分享-姓名標示-禁止改作","EVENTS-LICENSE-CCBYNCND":"創作分享-姓名標示-非商業性使用-禁止改作","EVENTS-LICENSE-CCBYNCSA":"創作分享-姓名標示-非商業性使用-相同方式分享","EVENTS-LICENSE-ALLRIGHTS":"保留所有權利","EVENTS-LICENSE-CCBYSA":"創作分享-姓名標示-相同方式分享","EVENTS-LICENSE-CCBYNC":"創作分享-姓名標示-非商業性使用","EVENTS-LICENSE-CCBY":"創作分享-姓名標示"},"calendar-prev":"Previous","calendar-next":"Next"},m={title:"Thumbnail Editor",noThumbnailAvailable:"No Thumbnail available",previewImageAlt:"Thumbnail for track",buttonGenerate:"Generate","buttonGenerate-tooltip":"Generate a new thumbnail from the current timeline marker position","buttonGenerate-tooltip-aria":"Generate a new thumbnail from the current timeline marker position",buttonUpload:"Upload","buttonUpload-tooltip":"Upload an image","buttonUpload-tooltip-aria":"Upload an image",buttonUseForOtherThumbnails:"Use for all tracks","buttonUseForOtherThumbnails-tooltip":"Use the thumbnail for all tracks","buttonUseForOtherThumbnails-tooltip-aria":"Use the thumbnail for all tracks",buttonDiscard:"Discard","buttonDiscard-tooltip":"Discard the thumbnail for this track","buttonDiscard-tooltip-aria":"Discard the thumbnail for this track",buttonGenerateAll:"Generate All","buttonGenerateAll-tooltip":"Generate new thumbnails for all tracks from the current timeline marker position","buttonGenerateAll-tooltip-aria":"Generate new thumbnails for all tracks from the current timeline marker position",explanation:"Upload or generate a thumbnail for each track.",primary:"Primary",secondary:"Secondary"},d={rowTitle:"Change thumbnail here",from:"from"},b={"generic-message":"發生嚴重錯誤！",details:"細節: ","workflowActive-errorTitle":"Temporarily unavailable","workflowActive-errorMessage":"This event is being processed. Please wait until the process is finished."},g={"main-heading":"歡迎使用影片編輯器","contact-admin":"如果您嘗試編輯特定影片但看到此頁面時，請聯繫您的管理員。","start-editing-1":"要開始編輯，請指定參數 ","start-editing-2":" 使用您要編輯的影片的媒體識別 ID。","link-to-documentation":"有關配置影片編輯器的更多信息，請參閱管理指南，網址為 "},p={"error-details-text":"詳細訊息：{{errorMessage}}","error-text":"發生了錯誤。 請稍等，然後再重試。","goBack-button":"不，回到上一步","callback-button-system":"Back to {{system}}","callback-button-generic":"Back to previous system"},h={title:"Select track(s) for processing",trackInactive:"不活動的",deleteTrackText:"刪除影音軌道",restoreTrackText:"還原影音軌道",cannotDeleteTrackText:"無法刪除影音軌道",deleteTrackTooltip:"請勿編碼和發佈此影音軌道。",restoreTrackTooltip:"編碼並發佈此影音軌道",cannotDeleteTrackTooltip:"無法從發佈的影片中刪除此影音軌道。"},S={"selectSubtitleButton-tooltip":"Edit subtitles for {{title}}","selectSubtitleButton-tooltip-aria":"Select {{title}} for subtitle editing","createSubtitleButton-tooltip":"Opens a dialog for creating new subtitles","createSubtitleButton-clicked-tooltip-aria":"Contains a dialog for creating new subtitles","createSubtitleButton-createButton":"Create","createSubtitleButton-createButton-tooltip":"Start a new subtitle file with the chosen title.","createSubtitleButton-createButton-disabled-tooltip":"Please pick a language from the dropdown above.","createSubtitleDropdown-label":"Pick a language",backButton:"Back","backButton-tooltip":"Return to subtitle selection","downloadButton-title":"Download","downloadButton-tooltip":"Download subtitle as vtt file",editTitle:"Subtitle Editor - {{title}}","editTitle-loading":"Loading",generic:"Generic",autoGenerated:"Auto-generated"},A={"startTime-tooltip":"Beginning of the segment","startTime-tooltip-aria":"Beginning at","endTime-tooltip":"End of the segment","endTime-tooltip-aria":"Ending at",addSegmentAbove:"Add segment above",addSegmentBelow:"Add segment below",jumpToSegmentAbove:"Jump to segment above",jumpToSegmentBelow:"Jump to segment below",deleteSegment:"Delete segment"},k={selectVideoLabel:"Video Flavors"},E={overviewTimelineTooltip:"Timeline overview"},N={header:"Shortcuts",defaultGroupName:"一般",missingLabel:"未知",groupVideoPlayer:"Video Player",groupCuttingView:"裁剪",groupCuttingViewScrubber:"Timeline",groupSubtitleList:"Subtitles",sequenceSeparator:"or",genericError:"無法載入概觀資料",videoPlayButton:"播放/暫停 影片",scrubberLeft:"往左移",scrubberRight:"往右移",scrubberIncrease:"Move faster",scrubberDecrease:"移動慢一點"},f={appearance:"Appearance",dark:"Dark",light:"Light",auto:"Auto","dark-high-contrast":"Dark (High contrast)","light-high-contrast":"Light (High contrast)"},v={language:"語言"},G={mainMenu:t,cuttingActions:e,video:o,finishMenu:a,save:i,discard:n,theEnd:r,workflowSelection:l,timeline:s,workflowConfig:u,metadata:c,thumbnail:m,thumbnailSimple:d,error:b,landing:g,various:p,trackSelection:h,subtitles:S,subtitleList:A,subtitleVideoArea:k,subtitleTimeline:E,keyboardControls:N,theme:f,language:v};export{e as cuttingActions,G as default,n as discard,b as error,a as finishMenu,N as keyboardControls,g as landing,v as language,t as mainMenu,c as metadata,i as save,A as subtitleList,E as subtitleTimeline,k as subtitleVideoArea,S as subtitles,r as theEnd,f as theme,m as thumbnail,d as thumbnailSimple,s as timeline,h as trackSelection,p as various,o as video,u as workflowConfig,l as workflowSelection};
