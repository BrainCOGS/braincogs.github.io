(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{442:function(a,e,t){a.exports=t.p+"assets/img/Alert_dataframe_example.f1a8b1a2.png"},443:function(a,e,t){a.exports=t.p+"assets/img/Alert_message_example.e8176029.png"},520:function(a,e,t){"use strict";t.r(e);var s=t(10),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title))]),a._v(" "),e("h2",{attrs:{id:"set-up-custom-slack-alerts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-up-custom-slack-alerts"}},[a._v("#")]),a._v(" Set up custom slack alerts")]),a._v(" "),e("ol",[e("li",[a._v("Follow  "),e("a",{attrs:{href:"https://braincogs.github.io/software/db_access.html#db-access-for-python-repository"}},[a._v("Database Access with Python instructions")])]),a._v(" "),e("li",[a._v("On U19_pipeline_python repository open "),e("code",[a._v("u19_pipeline/alert_system/custom_alerts directory")])]),a._v(" "),e("li",[a._v("Create a new python file with a meaningful name for the alert: (e.g. "),e("code",[a._v("subject_bias.py")]),a._v(")")]),a._v(" "),e("li",[a._v("Copy skeleton code from "),e("code",[a._v("u19_pipeline/alert_system/alert_code_skeleton.py")])])]),a._v(" "),e("ul",[e("li",[a._v("All slack alert code has two parts: "),e("strong",[a._v("a slack channel configuration")]),a._v(" and a "),e("strong",[a._v("main function")]),a._v(" described on the next section:")])]),a._v(" "),e("h3",{attrs:{id:"main-function-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main-function-guide"}},[a._v("#")]),a._v(" main function guide")]),a._v(" "),e("ul",[e("li",[a._v("This function should return a pandas DataFrame where each row will be a slack alert message on configured channels.")]),a._v(" "),e("li",[a._v("You can use datajoint to get data for the alert (e.g. custom_alerts/rig_bias.py) or simply call os scripts (e.g. custom_alerts/braininit_storage.py)")]),a._v(" "),e("li",[a._v("All columns of the dataframe will be included in the alert. (Don't add too many !!)")]),a._v(" "),e("li",[a._v("Dataframe Example with slack notification message:")])]),a._v(" "),e("figure",[e("img",{attrs:{src:t(442)}}),a._v(" "),e("center",[e("figcaption",[a._v("Example Dataframe for notification ")])])],1),a._v(" "),e("figure",[e("img",{attrs:{src:t(443)}}),a._v(" "),e("center",[e("figcaption",[a._v("Example Notification from previous DataFrame")])])],1),a._v(" "),e("ul",[e("li",[a._v("You can check examples of some alers in the u19_pipeline/alert_system/custom_alerts directory")])]),a._v(" "),e("h3",{attrs:{id:"slack-channel-dictionary-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slack-channel-dictionary-configuration"}},[a._v("#")]),a._v(" Slack channel dictionary configuration")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("The slack channel configuration is a dictionary to link corresponding slack channels and conversations with an specific alert.")])]),a._v(" "),e("li",[e("p",[a._v("The dictionary has two keys: "),e("code",[a._v("'slack_notification_channel'")]),a._v(" and "),e("code",[a._v("'slack_users_channel'")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("slack_notification_channel")]),a._v(" General channels names to send notifications.")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("slack_users_channel")]),a._v(" Private direct message to send notificatons.")])]),a._v(" "),e("li",[e("p",[a._v("You can add a list of channels to each of the keys:")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("slack_notification_channel")]),a._v(" Any "),e("code",[a._v("webhook_name")]),a._v(" (see next section)")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("slack_users_channel")]),a._v(" Any user_id with configured slack_weebhook (see next section)")])])]),a._v(" "),e("h4",{attrs:{id:"check-available-notification-channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-available-notification-channels"}},[a._v("#")]),a._v(" Check available notification channels:")]),a._v(" "),e("h5",{attrs:{id:"matlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[a._v("#")]),a._v(" MATLAB")]),a._v(" "),e("ol",[e("li",[a._v("Execute "),e("code",[a._v("fetch(lab.SlackWebhooks,'*')")])])]),a._v(" "),e("h5",{attrs:{id:"python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[a._v("#")]),a._v(" Python")]),a._v(" "),e("ol",[e("li",[a._v("Execute:")])]),a._v(" "),e("ul",[e("li",[e("code",[a._v("lab = dj.create_virtual_module('lab', 'u19_lab')")])]),a._v(" "),e("li",[e("code",[a._v("lab.SlackWebhooks.fetch(as_dict=True)")])])]),a._v(" "),e("h4",{attrs:{id:"check-available-user-channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-available-user-channels"}},[a._v("#")]),a._v(" Check available user channels:")]),a._v(" "),e("h5",{attrs:{id:"matlab-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matlab-2"}},[a._v("#")]),a._v(" MATLAB")]),a._v(" "),e("ol",[e("li",[a._v("Execute "),e("code",[a._v("fetch(lab.User & \"slack_webhook <> ''\",'slack_webhook')")])])]),a._v(" "),e("h5",{attrs:{id:"python-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-2"}},[a._v("#")]),a._v(" Python")]),a._v(" "),e("ol",[e("li",[a._v("Execute:")])]),a._v(" "),e("ul",[e("li",[e("code",[a._v("lab = dj.create_virtual_module('lab', 'u19_lab')")])]),a._v(" "),e("li",[e("code",[a._v("(lab.User & \"slack_webhook <> ''\").fetch('KEY', 'slack_webhook', as_dict=True)")])])]),a._v(" "),e("h3",{attrs:{id:"create-and-register-new-webhooks-for-alerts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-and-register-new-webhooks-for-alerts"}},[a._v("#")]),a._v(" Create and register new webhooks for alerts:")]),a._v(" "),e("ol",[e("li",[a._v("Create a new slack channel if needed (for notification channels).")]),a._v(" "),e("li",[a._v("Follow instructions to create webhooks from: "),e("a",{attrs:{href:"https://slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack"}},[a._v("Slack documentation")])]),a._v(" "),e("li",[a._v("Copy slack webhook from slack API web page.")])]),a._v(" "),e("h4",{attrs:{id:"add-notification-channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-notification-channels"}},[a._v("#")]),a._v(" Add notification channels:")]),a._v(" "),e("h5",{attrs:{id:"matlab-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matlab-3"}},[a._v("#")]),a._v(" MATLAB")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("new_slack_webhook = struct\nnew_slack_webhook.webhook_name = (notification channel name)\nnew_slack_webhook.webhook_url  = (webhook url from slack API)\ninsert(lab.SlackWebhooks,new_slack_webhook)\n")])])]),e("h5",{attrs:{id:"python-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-3"}},[a._v("#")]),a._v(" Python")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lab = dj.create_virtual_module('lab', 'u19_lab')\nnew_slack_webhook = dict()\nnew_slack_webhook['webhook_name'] = (notification channel name)\nnew_slack_webhook['webhook_url']  = (webhook url from slack API)\nlab.SlackWebhooks.insert1(new_slack_webhook)\n")])])]),e("h4",{attrs:{id:"update-user-channel-webhook-notification-channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-user-channel-webhook-notification-channels"}},[a._v("#")]),a._v(" Update user channel webhook notification channels:")]),a._v(" "),e("h5",{attrs:{id:"matlab-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matlab-4"}},[a._v("#")]),a._v(" MATLAB")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("user = struct\nuser.user_id = (NETID of user)\nupdate(lab.User & user,'slack_webhook', (webhook url from slack API))\n")])])]),e("h5",{attrs:{id:"python-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-4"}},[a._v("#")]),a._v(" Python")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lab = dj.create_virtual_module('lab', 'u19_lab')\nuser = dict()\nuser['user_id'] = (NETID of user)\nuser['slack_webhook'] = (webhook url from slack API)\nlab.User.update1(user)\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);