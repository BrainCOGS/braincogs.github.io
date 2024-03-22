(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{470:function(e,t,a){e.exports=a.p+"assets/img/plot_frequency_sessions1.6ea83bcc.png"},471:function(e,t,a){e.exports=a.p+"assets/img/plot_frequency_sessions2.302da2bb.png"},472:function(e,t,a){e.exports=a.p+"assets/img/velocity_subject.0e563aaf.png"},473:function(e,t,a){e.exports=a.p+"assets/img/path_table.8564e498.png"},526:function(e,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("h2",{attrs:{id:"matlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[e._v("#")]),e._v(" MATLAB")]),e._v(" "),t("h3",{attrs:{id:"prerequesites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequesites"}},[e._v("#")]),e._v(" Prerequesites")]),e._v(" "),t("ol",[t("li",[e._v("U19-pipeline-matlab repo added to MATLAB path")]),e._v(" "),t("li",[e._v("Mounted network cup drives (braininit, u19_dj)")])]),e._v(" "),t("ul",[t("li",[e._v("Check (see "),t("a",{attrs:{href:"https://braincogs.github.io/software/db_access.html"}},[e._v("Database access section")]),e._v(" ) for more info.")])]),e._v(" "),t("h3",{attrs:{id:"recommended-tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recommended-tutorial"}},[e._v("#")]),e._v(" Recommended tutorial")]),e._v(" "),t("ul",[t("li",[e._v("Go through "),t("code",[e._v("U19-pipeline-matlab/tutorials/202103/session01_queries_fetches.mlx")]),e._v(" to learn basic tips on datajoint.")])]),e._v(" "),t("h3",{attrs:{id:"useful-scripts-and-functions-for-reseacher-general-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useful-scripts-and-functions-for-reseacher-general-use"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Useful scripts and functions")]),e._v(" for reseacher general use:")]),e._v(" "),t("h3",{attrs:{id:"read-behavior-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-behavior-file"}},[e._v("#")]),e._v(" Read behavior file:")]),e._v(" "),t("ol",[t("li",[e._v("Execute: (change key for desired session)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\n[status,data] = lab.utils.read_behavior_file(key)\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("If successful "),t("code",[e._v("status = 1")]),e._v(" and "),t("code",[e._v("data = log behavioral file")])])]),e._v(" "),t("h3",{attrs:{id:"get-behavior-file-location-local-for-spock-scotty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-behavior-file-location-local-for-spock-scotty"}},[e._v("#")]),e._v(" Get behavior file location (local & for spock/scotty)")]),e._v(" "),t("ol",[t("li",[e._v("If you only need to know the path of behavior file use:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\nbaseDir = fetch1(acquisition.SessionStarted & key, 'new_remote_path_behavior_file');\n[bucket_path, local_path] =  lab.utils.get_path_from_official_dir(baseDir)\n")])])]),t("h3",{attrs:{id:"get-full-trial-data-with-spatialtimeblobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-full-trial-data-with-spatialtimeblobs"}},[e._v("#")]),e._v(" get_full_trial_data with SpatialTimeBlobs")]),e._v(" "),t("ul",[t("li",[e._v("Get trial data (position, velocity, etc) efficiently with DB.")]),e._v(" "),t("li",[e._v("New method to retrieve all trial data for multiple sessions faster.")])]),e._v(" "),t("ol",[t("li",[e._v("Execute:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\nget_full_trial_data(key)\n")])])]),t("ul",[t("li",[e._v("Get trial data from joined tables as well (e.g. "),t("strong",[e._v("TowersBlock")]),e._v("):")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\nget_full_trial_data(key, behavior.TowersBlockTrial * behavior.TowersBlock)\n")])])]),t("ul",[t("li",[e._v("Get data from subtasks as well (e.g. "),t("strong",[e._v("Twolickspouts")]),e._v(" subtask)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'efonseca_ef114_act114', 'session_date', '2023-01-11');\nall_tables = behavior.TowersBlockTrial * behavior.TowersBlock * behavior_subtask.TwolickspoutsBlockTrial * behavior_subtask.TwolickspoutsBlock\nget_full_trial_data(key, all_tables)\n")])])]),t("h3",{attrs:{id:"get-stats-from-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-stats-from-session"}},[e._v("#")]),e._v(" get stats from session")]),e._v(" "),t("ul",[t("li",[e._v("To get behavior file like stats (on the trial level) for a single or multiple sessions use this function")]),e._v(" "),t("li",[e._v("Stats include, but not limited to: ("),t("code",[e._v("correct_left, correct_right, cum_correct_trials, performance, goodFraction, numPerMin, numRewardsPerMin, bias")]),e._v(")")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\nstat_struct = get_stats_from_session(key, \"all\")\n")])])]),t("h3",{attrs:{id:"get-behaviorfile-as-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-behaviorfile-as-db"}},[e._v("#")]),e._v(" get behaviorfile as db")]),e._v(" "),t("ul",[t("li",[e._v("Function to unnest behavior file structure to get a plain trial table (with block data merged).")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\ndata_struct = get_behaviorfile_as_db(key)\n")])])]),t("h3",{attrs:{id:"get-time-from-iteration-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-time-from-iteration-variable"}},[e._v("#")]),e._v(" get time from iteration variable")]),e._v(" "),t("ul",[t("li",[e._v('Example of how to "translate" a variable from iteration# to trial_time')]),e._v(" "),t("li",[e._v("In this case, 1st row of variable licks (iteration#) is translated to lick_times and then added to original trial structure")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'efonseca_ef114_act114', 'session_date', '2023-01-11');\ntrial_data = get_full_trial_data(key, behavior.TowersBlockTrial * behavior_subtask.TwolickspoutsBlockTrial);\nlicks_time_struct = struct;\nfor i=1:length(trial_data)\n   licks_time_struct(i,1).lick_times = get_time_from_iter(trial_data(i).trial_time, trial_data(i).licks(1,:));\nend\ntrial_data = cat_struct(trial_data, licks_time_struct);\n")])])]),t("h3",{attrs:{id:"plot-framerate-frequency-sessions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plot-framerate-frequency-sessions"}},[e._v("#")]),e._v(" plot framerate frequency sessions")]),e._v(" "),t("ul",[t("li",[e._v("Plot trial by trial framerate of multiple sessions for comparison")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('key = \'subject_fullname like "mioffe%" and session_date > "2022-01-01" and session_date < "2022-01-30"\';\nanalyze_iteration_time(key)\n')])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(470)}}),e._v(" "),t("center",[t("figcaption",[e._v("Framerate trial by trial sessions")])])],1),e._v(" "),t("h3",{attrs:{id:"plot-framerate-frequency-levels-and-rigs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plot-framerate-frequency-levels-and-rigs"}},[e._v("#")]),e._v(" plot framerate frequency levels and rigs")]),e._v(" "),t("ul",[t("li",[e._v("Plot mean framerate by level and rig for multiple sessions")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('key = \'subject_fullname like "mioffe%" and session_date > "2022-01-01" and session_date < "2022-12-10"\';\nanalyze_iteration_time_level_rig(key)\n')])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(471)}}),e._v(" "),t("center",[t("figcaption",[e._v("Mean framerate by level and rig ")])])],1),e._v(" "),t("h3",{attrs:{id:"plot-velocity-sessions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plot-velocity-sessions"}},[e._v("#")]),e._v(" plot velocity sessions")]),e._v(" "),t("ul",[t("li",[e._v("Plot mean - max range velocity by session for multiple behavior sessions")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'emdiamanti_gps7');\nplot_velocity_session(key)\n")])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(472)}}),e._v(" "),t("center",[t("figcaption",[e._v("Velocity plot for multiple sessions")])])],1),e._v(" "),t("h3",{attrs:{id:"get-path-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-path-table"}},[e._v("#")]),e._v(" get path table")]),e._v(" "),t("ol",[t("li",[e._v("Get default paths for network cup drives for different OS and spock/scotty (bucket)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key = struct('subject_fullname', 'testuser_T06', 'session_date', '2022-04-20');\nbaseDir = fetch1(acquisition.SessionStarted & key, 'new_remote_path_behavior_file');\n[bucket_path, local_path] =  lab.utils.get_path_from_official_dir(baseDir)\n")])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(473)}}),e._v(" "),t("center",[t("figcaption",[e._v("Path table data")])])],1),e._v(" "),t("h3",{attrs:{id:"common-errors-and-troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-errors-and-troubleshooting"}},[e._v("#")]),e._v(" Common errors and troubleshooting")]),e._v(" "),t("ol",[t("li",[e._v("When trying to fetch from a table with external storage and corresponding network cup drive is not mounted:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Error using dj.store_plugins.File (line 89)\nDirectory `/Volumes/u19_dj/external_dj_blobs` not accessible.\n\nError in dj.internal.ExternalTable (line 52)\n           self.spec = dj.store_plugins.(storePlugin)(config);\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Error using fread\nInvalid file identifier. Use fopen to generate a valid file identifier.\n\nError in dj.store_plugins.File.download_buffer (line 63)\n           result = fread(fileID);\n")])])]),t("ul",[t("li",[e._v("Just mount all cup drives and try agian !!")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("key reference more than one session when function was supposed to work for single sessions")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Error using dj.internal.GeneralRelvar/fetch1 (line 250)\nfetch1 can only retrieve a single existing tuple.\n")])])]),t("ul",[t("li",[e._v("Just recreate key to reference a single session.")])]),e._v(" "),t("h2",{attrs:{id:"python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[e._v("#")]),e._v(" PYTHON")]),e._v(" "),t("h3",{attrs:{id:"common-errors-and-troubleshooting-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-errors-and-troubleshooting-2"}},[e._v("#")]),e._v(" Common errors and troubleshooting")])])}),[],!1,null,null,null);t.default=r.exports}}]);