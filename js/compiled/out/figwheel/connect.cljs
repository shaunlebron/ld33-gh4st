(ns figwheel.connect (:require [gh4st.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/gh4st.core.on-js-reload (apply js/gh4st.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'gh4st.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

