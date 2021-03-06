const iconsArray = [
  'add',
  'add-circle',
  'add-circle-outline',
  'add-circle-sharp',
  'add-outline',
  'add-sharp',
  'airplane',
  'airplane-outline',
  'airplane-sharp',
  'alarm',
  'alarm-outline',
  'alarm-sharp',
  'albums',
  'albums-outline',
  'albums-sharp',
  'alert',
  'alert-circle',
  'alert-circle-outline',
  'alert-circle-sharp',
  'alert-outline',
  'alert-sharp',
  'american-football',
  'american-football-outline',
  'american-football-sharp',
  'analytics',
  'analytics-outline',
  'analytics-sharp',
  'aperture',
  'aperture-outline',
  'aperture-sharp',
  'apps',
  'apps-outline',
  'apps-sharp',
  'archive',
  'archive-outline',
  'archive-sharp',
  'arrow-back',
  'arrow-back-circle',
  'arrow-back-circle-outline',
  'arrow-back-circle-sharp',
  'arrow-back-outline',
  'arrow-back-sharp',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-circle-outline',
  'arrow-down-circle-sharp',
  'arrow-down-outline',
  'arrow-down-sharp',
  'arrow-forward',
  'arrow-forward-circle',
  'arrow-forward-circle-outline',
  'arrow-forward-circle-sharp',
  'arrow-forward-outline',
  'arrow-forward-sharp',
  'arrow-redo',
  'arrow-redo-circle',
  'arrow-redo-circle-outline',
  'arrow-redo-circle-sharp',
  'arrow-redo-outline',
  'arrow-redo-sharp',
  'arrow-undo',
  'arrow-undo-circle',
  'arrow-undo-circle-outline',
  'arrow-undo-circle-sharp',
  'arrow-undo-outline',
  'arrow-undo-sharp',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-circle-outline',
  'arrow-up-circle-sharp',
  'arrow-up-outline',
  'arrow-up-sharp',
  'at',
  'at-circle',
  'at-circle-outline',
  'at-circle-sharp',
  'at-outline',
  'at-sharp',
  'attach',
  'attach-outline',
  'attach-sharp',
  'backspace',
  'backspace-outline',
  'backspace-sharp',
  'bandage',
  'bandage-outline',
  'bandage-sharp',
  'bar-chart',
  'bar-chart-outline',
  'bar-chart-sharp',
  'barbell',
  'barbell-outline',
  'barbell-sharp',
  'barcode',
  'barcode-outline',
  'barcode-sharp',
  'baseball',
  'baseball-outline',
  'baseball-sharp',
  'basket',
  'basket-outline',
  'basket-sharp',
  'basketball',
  'basketball-outline',
  'basketball-sharp',
  'battery-charging',
  'battery-charging-outline',
  'battery-charging-sharp',
  'battery-dead',
  'battery-dead-outline',
  'battery-dead-sharp',
  'battery-full',
  'battery-full-outline',
  'battery-full-sharp',
  'battery-half',
  'battery-half-outline',
  'battery-half-sharp',
  'beaker',
  'beaker-outline',
  'beaker-sharp',
  'bed',
  'bed-outline',
  'bed-sharp',
  'beer',
  'beer-outline',
  'beer-sharp',
  'bicycle',
  'bicycle-outline',
  'bicycle-sharp',
  'bluetooth',
  'bluetooth-outline',
  'bluetooth-sharp',
  'boat',
  'boat-outline',
  'boat-sharp',
  'body',
  'body-outline',
  'body-sharp',
  'bonfire',
  'bonfire-outline',
  'bonfire-sharp',
  'book',
  'book-outline',
  'book-sharp',
  'bookmark',
  'bookmark-outline',
  'bookmark-sharp',
  'bookmarks',
  'bookmarks-outline',
  'bookmarks-sharp',
  'briefcase',
  'briefcase-outline',
  'briefcase-sharp',
  'browsers',
  'browsers-outline',
  'browsers-sharp',
  'brush',
  'brush-outline',
  'brush-sharp',
  'bug',
  'bug-outline',
  'bug-sharp',
  'build',
  'build-outline',
  'build-sharp',
  'bulb',
  'bulb-outline',
  'bulb-sharp',
  'bus',
  'bus-outline',
  'bus-sharp',
  'business',
  'business-outline',
  'business-sharp',
  'cafe',
  'cafe-outline',
  'cafe-sharp',
  'calculator',
  'calculator-outline',
  'calculator-sharp',
  'calendar',
  'calendar-outline',
  'calendar-sharp',
  'call',
  'call-outline',
  'call-sharp',
  'camera',
  'camera-outline',
  'camera-reverse',
  'camera-reverse-outline',
  'camera-reverse-sharp',
  'camera-sharp',
  'car',
  'car-outline',
  'car-sharp',
  'car-sport',
  'car-sport-outline',
  'car-sport-sharp',
  'card',
  'card-outline',
  'card-sharp',
  'caret-back',
  'caret-back-circle',
  'caret-back-circle-outline',
  'caret-back-circle-sharp',
  'caret-back-outline',
  'caret-back-sharp',
  'caret-down',
  'caret-down-circle',
  'caret-down-circle-outline',
  'caret-down-circle-sharp',
  'caret-down-outline',
  'caret-down-sharp',
  'caret-forward',
  'caret-forward-circle',
  'caret-forward-circle-outline',
  'caret-forward-circle-sharp',
  'caret-forward-outline',
  'caret-forward-sharp',
  'caret-up',
  'caret-up-circle',
  'caret-up-circle-outline',
  'caret-up-circle-sharp',
  'caret-up-outline',
  'caret-up-sharp',
  'cart',
  'cart-outline',
  'cart-sharp',
  'cash',
  'cash-outline',
  'cash-sharp',
  'cellular',
  'cellular-outline',
  'cellular-sharp',
  'chatbox',
  'chatbox-ellipses',
  'chatbox-ellipses-outline',
  'chatbox-ellipses-sharp',
  'chatbox-outline',
  'chatbox-sharp',
  'chatbubble',
  'chatbubble-ellipses',
  'chatbubble-ellipses-outline',
  'chatbubble-ellipses-sharp',
  'chatbubble-outline',
  'chatbubble-sharp',
  'chatbubbles',
  'chatbubbles-outline',
  'chatbubbles-sharp',
  'checkbox',
  'checkbox-outline',
  'checkbox-sharp',
  'checkmark',
  'checkmark-circle',
  'checkmark-circle-outline',
  'checkmark-circle-sharp',
  'checkmark-done',
  'checkmark-done-circle',
  'checkmark-done-circle-outline',
  'checkmark-done-circle-sharp',
  'checkmark-done-outline',
  'checkmark-done-sharp',
  'checkmark-outline',
  'checkmark-sharp',
  'chevron-back',
  'chevron-back-circle',
  'chevron-back-circle-outline',
  'chevron-back-circle-sharp',
  'chevron-back-outline',
  'chevron-back-sharp',
  'chevron-down',
  'chevron-down-circle',
  'chevron-down-circle-outline',
  'chevron-down-circle-sharp',
  'chevron-down-outline',
  'chevron-down-sharp',
  'chevron-forward',
  'chevron-forward-circle',
  'chevron-forward-circle-outline',
  'chevron-forward-circle-sharp',
  'chevron-forward…taurant-sharp',
  'md-return-down-back',
  'md-return-down-back-outline',
  'md-return-down-back-sharp',
  'md-return-down-forward',
  'md-return-down-forward-outline',
  'md-return-down-forward-sharp',
  'md-return-up-back',
  'md-return-up-back-outline',
  'md-return-up-back-sharp',
  'md-return-up-forward',
  'md-return-up-forward-outline',
  'md-return-up-forward-sharp',
  'md-ribbon',
  'md-ribbon-outline',
  'md-ribbon-sharp',
  'md-rocket',
  'md-rocket-outline',
  'md-rocket-sharp',
  'md-rose',
  'md-rose-outline',
  'md-rose-sharp',
  'md-sad',
  'md-sad-outline',
  'md-sad-sharp',
  'md-save',
  'md-save-outline',
  'md-save-sharp',
  'md-scan',
  'md-scan-circle',
  'md-scan-circle-outline',
  'md-scan-circle-sharp',
  'md-scan-outline',
  'md-scan-sharp',
  'md-school',
  'md-school-outline',
  'md-school-sharp',
  'md-search',
  'md-search-circle',
  'md-search-circle-outline',
  'md-search-circle-sharp',
  'md-search-outline',
  'md-search-sharp',
  'md-send',
  'md-send-outline',
  'md-send-sharp',
  'md-server',
  'md-server-outline',
  'md-server-sharp',
  'md-settings',
  'md-settings-outline',
  'md-settings-sharp',
  'md-shapes',
  'md-shapes-outline',
  'md-shapes-sharp',
  'md-share',
  'md-share-outline',
  'md-share-sharp',
  'md-share-social',
  'md-share-social-outline',
  'md-share-social-sharp',
  'md-shield',
  'md-shield-checkmark',
  'md-shield-checkmark-outline',
  'md-shield-checkmark-sharp',
  'md-shield-outline',
  'md-shield-sharp',
  'md-shirt',
  'md-shirt-outline',
  'md-shirt-sharp',
  'md-shuffle',
  'md-shuffle-outline',
  'md-shuffle-sharp',
  'md-skull',
  'md-skull-outline',
  'md-skull-sharp',
  'md-snow',
  'md-snow-outline',
  'md-snow-sharp',
  'md-speedometer',
  'md-speedometer-outline',
  'md-speedometer-sharp',
  'md-square',
  'md-square-outline',
  'md-square-sharp',
  'md-star',
  'md-star-half',
  'md-star-half-outline',
  'md-star-half-sharp',
  'md-star-outline',
  'md-star-sharp',
  'md-stats-chart',
  'md-stats-chart-outline',
  'md-stats-chart-sharp',
  'md-stop',
  'md-stop-circle',
  'md-stop-circle-outline',
  'md-stop-circle-sharp',
  'md-stop-outline',
  'md-stop-sharp',
  'md-stopwatch',
  'md-stopwatch-outline',
  'md-stopwatch-sharp',
  'md-subway',
  'md-subway-outline',
  'md-subway-sharp',
  'md-sunny',
  'md-sunny-outline',
  'md-sunny-sharp',
  'md-swap-horizontal',
  'md-swap-horizontal-outline',
  'md-swap-horizontal-sharp',
  'md-swap-vertical',
  'md-swap-vertical-outline',
  'md-swap-vertical-sharp',
  'md-sync',
  'md-sync-circle',
  'md-sync-circle-outline',
  'md-sync-circle-sharp',
  'md-sync-outline',
  'md-sync-sharp',
  'md-tablet-landscape',
  'md-tablet-landscape-outline',
  'md-tablet-landscape-sharp',
  'md-tablet-portrait',
  'md-tablet-portrait-outline',
  'md-tablet-portrait-sharp',
  'md-tennisball',
  'md-tennisball-outline',
  'md-tennisball-sharp',
  'md-terminal',
  'md-terminal-outline',
  'md-terminal-sharp',
  'md-text',
  'md-text-outline',
  'md-text-sharp',
  'md-thermometer',
  'md-thermometer-outline',
  'md-thermometer-sharp',
  'md-thumbs-down',
  'md-thumbs-down-outline',
  'md-thumbs-down-sharp',
  'md-thumbs-up',
  'md-thumbs-up-outline',
  'md-thumbs-up-sharp',
  'md-thunderstorm',
  'md-thunderstorm-outline',
  'md-thunderstorm-sharp',
  'md-time',
  'md-time-outline',
  'md-time-sharp',
  'md-timer',
  'md-timer-outline',
  'md-timer-sharp',
  'md-today',
  'md-today-outline',
  'md-today-sharp',
  'md-toggle',
  'md-toggle-outline',
  'md-toggle-sharp',
  'md-trail-sign',
  'md-trail-sign-outline',
  'md-trail-sign-sharp',
  'md-train',
  'md-train-outline',
  'md-train-sharp',
  'md-transgender',
  'md-transgender-outline',
  'md-transgender-sharp',
  'md-trash',
  'md-trash-bin',
  'md-trash-bin-outline',
  'md-trash-bin-sharp',
  'md-trash-outline',
  'md-trash-sharp',
  'md-trending-down',
  'md-trending-down-outline',
  'md-trending-down-sharp',
  'md-trending-up',
  'md-trending-up-outline',
  'md-trending-up-sharp',
  'md-triangle',
  'md-triangle-outline',
  'md-triangle-sharp',
  'md-trophy',
  'md-trophy-outline',
  'md-trophy-sharp',
  'md-tv',
  'md-tv-outline',
  'md-tv-sharp',
  'md-umbrella',
  'md-umbrella-outline',
  'md-umbrella-sharp',
  'md-videocam',
  'md-videocam-outline',
  'md-videocam-sharp',
  'md-volume-high',
  'md-volume-high-outline',
  'md-volume-high-sharp',
  'md-volume-low',
  'md-volume-low-outline',
  'md-volume-low-sharp',
  'md-volume-medium',
  'md-volume-medium-outline',
  'md-volume-medium-sharp',
  'md-volume-mute',
  'md-volume-mute-outline',
  'md-volume-mute-sharp',
  'md-volume-off',
  'md-volume-off-outline',
  'md-volume-off-sharp',
  'md-walk',
  'md-walk-outline',
  'md-walk-sharp',
  'md-wallet',
  'md-wallet-outline',
  'md-wallet-sharp',
  'md-warning',
  'md-warning-outline',
  'md-warning-sharp',
  'md-watch',
  'md-watch-outline',
  'md-watch-sharp',
  'md-water',
  'md-water-outline',
  'md-water-sharp',
  'md-wifi',
  'md-wifi-outline',
  'md-wifi-sharp',
  'md-wine',
  'md-wine-outline',
  'md-wine-sharp',
  'md-woman',
  'md-woman-outline',
  'md-woman-sharp',
];

export default iconsArray;
