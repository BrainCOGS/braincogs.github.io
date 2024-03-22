(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{480:function(t,e,a){t.exports=a.p+"assets/img/Twolickspouts_subtask_files.971dd738.png"},481:function(t,e,a){t.exports=a.p+"assets/img/subtask_trainingGUI.339eaae6.png"},531:function(t,e,a){"use strict";a.r(e);var s=a(10),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("ul",[e("li",[t._v("This documentation will guide the researcher through the process of creating a new subtask pipeline.")]),t._v(" "),e("li",[t._v('Currently in BRAINCoGS data from our well known "VR Towers Task" is stored in the DB.')]),t._v(" "),e("li",[t._v("New behavior paradigms include new variables that are not included on our original design:")]),t._v(" "),e("li",[t._v("Context task")]),t._v(" "),e("li",[t._v("Doorstop task")]),t._v(" "),e("li",[t._v("Movie/Stationary task")]),t._v(" "),e("li",[t._v("This results on having only a subset of entire data stored on the DB.")]),t._v(" "),e("li",[t._v("The subtask pipeline was created to solve this issue. Its goal is to store specific subtask variables in a different subset of tables in the DB.")])]),t._v(" "),e("h2",{attrs:{id:"what-does-the-subtask-pipeline-include"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-the-subtask-pipeline-include"}},[t._v("#")]),t._v(" What does the “subtask” pipeline include:")]),t._v(" "),e("ul",[e("li",[t._v('Minimum data framework to store in a DB all relevant data from "VR Towers Task" variants.')]),t._v(" "),e("li",[t._v("Behavior integration. Training system will include the subtask as an option to be selected for a behavior session.")])]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("In order to create a new manipulation it’s assumed that:")]),t._v(" "),e("li",[t._v("The researcher is able to connect to "),e("a",{attrs:{href:"https://braincogs.github.io/software/db_access.html#db-access-for-matlab-repository"}},[t._v("datajoint00.pni.princeton.edu DB")])]),t._v(" "),e("li",[t._v("Latest version of u19_pipeline_matlab repository.")])]),t._v(" "),e("h2",{attrs:{id:"initial-set-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initial-set-up"}},[t._v("#")]),t._v(" Initial set-up")]),t._v(" "),e("ul",[e("li",[t._v("Connect to database "),e("code",[t._v("connect_datajoint00")])]),t._v(" "),e("li",[t._v("Create new subtask base code (substitute subtask_name with the real name of the subtask: "),e("code",[t._v("create_new_subtask_classes('(subtask_name)')")])]),t._v(" "),e("li",[t._v("This will create table codes templates for subtask : "),e("strong",[t._v("(Subtask)Session.m, (Subtask)Block.m & (Subtask)Trial.m")]),t._v(" on the "),e("code",[t._v("U19-pipeline-matlab/schemas/+behavior_subtask")]),t._v(" directory:")]),t._v(" "),e("li",[t._v("(We will use "),e("strong",[t._v("“Twolickspouts” subtask")]),t._v(" for this example).")])]),t._v(" "),e("figure",[e("img",{attrs:{src:a(480)}}),t._v(" "),e("center",[e("figcaption",[t._v("Files created for Twolickspouts subtask on U19-pipeline-matlab/schemas/+behavior_subtask directory")])])],1),t._v(" "),e("h2",{attrs:{id:"table-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-description"}},[t._v("#")]),t._v(" Table description")]),t._v(" "),e("ul",[e("li",[t._v("Throughout the table description chapter we are going to give an example of an already working subtask pipeline. (Twolicksspouts).")])]),t._v(" "),e("h3",{attrs:{id:"task-subtask-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-subtask-table"}},[t._v("#")]),t._v(" task.Subtask table")]),t._v(" "),e("ul",[e("li",[t._v("This table registers all subtasks being created with this pipeline.")])]),t._v(" "),e("h3",{attrs:{id:"acquisition-sessionsubtask-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acquisition-sessionsubtask-table"}},[t._v("#")]),t._v(" acquisition.SessionSubtask table")]),t._v(" "),e("ul",[e("li",[t._v("This table stores subtask register for a specific behavior session. This table “links” a Task.subtask table with acquisition.Sesison table.")])]),t._v(" "),e("h3",{attrs:{id:"subtask-session-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subtask-session-table"}},[t._v("#")]),t._v(' "Subtask" Session table')]),t._v(" "),e("ul",[e("li",[t._v("The Session table stores related information for the entire session (review acquisition.Session for a related example).")])]),t._v(" "),e("h3",{attrs:{id:"subtask-block-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subtask-block-table"}},[t._v("#")]),t._v(' "Subtask" Block table')]),t._v(" "),e("ul",[e("li",[t._v("The Block table stores related information for each block of the session (review behavior.TowersBlock for a related example).")])]),t._v(" "),e("h3",{attrs:{id:"subtask-blocktrial-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subtask-blocktrial-table"}},[t._v("#")]),t._v(' "Subtask" BlockTrial table')]),t._v(" "),e("ul",[e("li",[t._v("The BlockTrial table stores related information for each trial of the session (review behavior.TowersBlockTrial for a related example).")])]),t._v(" "),e("h2",{attrs:{id:"adding-code-to-subtask-tables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-code-to-subtask-tables"}},[t._v("#")]),t._v(' Adding code to "Subtask" tables')]),t._v(" "),e("ul",[e("li",[t._v('For each subtask you can add all needed variables from the behavior file to the "Subtask" tables.')]),t._v(" "),e("li",[t._v("Example for "),e("strong",[t._v("“Twolickspouts” subtask")])])]),t._v(" "),e("h3",{attrs:{id:"twolickspoutssession-table-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twolickspoutssession-table-code"}},[t._v("#")]),t._v(" TwolickspoutsSession table code")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" %{\n# Session level data for a twolickspouts subtask session\n-> acquisition.Session\n---\n%}\n\nclassdef TwolickspoutsSession < dj.Imported\n")])])]),e("ul",[e("li",[t._v("There is no extra field to add at session level, no code added to the file.")])]),t._v(" "),e("h3",{attrs:{id:"twolickspoutsblock-table-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twolickspoutsblock-table-code"}},[t._v("#")]),t._v(" TwolickspoutsBlock table code")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("%{\n# Block level data for a twolickspouts subtask session\n-> behavior_subtask.TwolickspoutsSession\n-> acquisition.SessionBlock\n---\nsublevel                  : int                           # sublevel for the block\ntrial_params              : blob                          # maze features of current block\n%}\n.\n.\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n%%%% fill here read corresponding TestSubtask data for each block\ntuple.sublevel = block_data.sublevel;\ntuple.trial_params = block_data.trialParams;\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n")])])]),e("ul",[e("li",[t._v("In this example two fields were added to TwolickspoutsBlock table: (sublevel & trial_params)")]),t._v(" "),e("li",[t._v("Two things are needed:")])]),t._v(" "),e("ol",[e("li",[t._v("Adding them to the table definition (1st part of the code block)")]),t._v(" "),e("li",[t._v("Add how this fields are being set from "),e("strong",[t._v("block_data")]),t._v(" variable: (search for "),e("strong",[t._v("fill here")]),t._v(" section on the code). block_data has all block data from behavior file.")])]),t._v(" "),e("h3",{attrs:{id:"twolickspoutsblocktrial-table-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twolickspoutsblocktrial-table-code"}},[t._v("#")]),t._v(" TwolickspoutsBlockTrial table code")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" %{\n # Trial level data for a twolickspouts subtask session\n -> behavior_subtask.TwolickspoutsBlock\n -> acquisition.SessionBlockTrial\n ---\n licks                        : tinyblob                      # all iterations with lick detected and side\n trial_difficult_type         : varchar(16)                   # trial type label (easy, medium, difficult, etc)\n forced_automatic_reward=null : tinyint                       # 1 if reward was forced for trial 0 otherwise\n %}\n .\n .\n %%%%%%%%%%%%%%%%%%%%%%%\n %%%% fill here read corresponding Twolickspouts data for each trial\n trial_data.licks = curr_trial.licks;\n if isfield(curr_trial, 'forced_automatic_reward')\n   trial_data.forced_automatic_reward = curr_trial.forced_automatic_reward;\n else\n   trial_data.forced_automatic_reward = NaN;\n end\n if isfield(curr_trial, 'trialDifficultyType')\n   trial_data.trial_difficult_type = curr_trial.trialDifficultyType;  \n else\n   trial_data.trial_difficult_type = '';\n end\n %%%%%%%%%%%%%%%%%%%%%%%%\n")])])]),e("ul",[e("li",[t._v("In this example three fields were added to TwolickspoutsBlockTrial table: (licks & trial_difficult_type, forced_automatic_reward)")]),t._v(" "),e("li",[t._v("Two things are needed:")])]),t._v(" "),e("ol",[e("li",[t._v("Adding them to the table definition (1st part of the code block)")]),t._v(" "),e("li",[t._v("Add how this fields are being set from "),e("strong",[t._v("trial_data")]),t._v(" variable: (search for "),e("strong",[t._v("fill here")]),t._v(" section on the code). trial_data has all trial data from behavior file.")])]),t._v(" "),e("h3",{attrs:{id:"create-tables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-tables"}},[t._v("#")]),t._v(" Create tables")]),t._v(" "),e("ul",[e("li",[t._v('After all code has been written on "Subtask"Session, "Subtask"Block & "Subtas"BlockTrial codebase it is needed to actually create the tables in the DB.')]),t._v(" "),e("li",[t._v("Execute: "),e("code",[t._v("create_new_subtask_tables('(subtask_name)')")])])]),t._v(" "),e("h3",{attrs:{id:"training-with-new-subtask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#training-with-new-subtask"}},[t._v("#")]),t._v(" Training with new subtask")]),t._v(" "),e("ul",[e("li",[t._v("After all code for new sbutask has been set up and tables have been created the researcher will be able to select a specific subtask that will be associated with the schedule for a given animal. Subsequent behavior sessions will correspond to that selection.")])]),t._v(" "),e("figure",[e("img",{attrs:{src:a(481)}}),t._v(" "),e("center",[e("figcaption",[t._v("Subtask selection for a training schedule of a subject.")])])],1),t._v(" "),e("h3",{attrs:{id:"fetching-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetching-data"}},[t._v("#")]),t._v(" Fetching Data")]),t._v(" "),e("ul",[e("li",[t._v("After training has occurred all relevant data will be accessible in the corresponding tables on the behavior_subtask DB.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.datajoint.org/matlab/queries/03-Fetch.html"}},[t._v("Datajoint fetch guide")])]),t._v(" "),e("li",[t._v("Example to fetch all Twolickspouts data for a single session:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("key = struct('subject_fullname', 'testuser_T01', 'session_date', '2022-12-27')\nfetch(behavior_subtask.TwolickspoutsSession * behavior_subtask.TwolickspoutsBlock ...\n* behavior_subtask.TwolickspoutsBlockTrial & key, '*')\n\nans = \n\n  5×1 struct array with fields:\n\n    subject_fullname\n    session_date\n    session_number\n    subtask\n    block\n    trial_idx\n    sublevel\n    trial_params\n    licks\n    trial_difficult_type\n    forced_automatic_reward\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);