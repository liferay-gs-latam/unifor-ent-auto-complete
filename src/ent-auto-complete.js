;(function (AUI, $) {
  'use strict'

  const DEFAULT_OPTIONS = {
    ajax: {
      dataType: 'json',
      data: (params) => {
        return { q: params.term || '' }
      },
      processResults: (resp) => {
        return { results: resp && resp.data ? resp.data : [] }
      },
      delay: 250,
      cache: false,
    },
    minimumInputLength: 1
  }

  function initSelect2 () {
    return this.$element.select2(this.options)
  }

  function addResetListener () {
    var $field = this.$element,
        $form = this.$element.closest('form'),
        defaultValue  = $field.val()

    $form.on('reset', function() {
      $field.val(defaultValue).trigger('change')
    })
  }

  function addMaxLength () {
    let maxLength = this.options.maxLength

    if (maxLength) {
      this.$element.on('select2:open', () => {
        $('.select2-search__field').attr('maxlength', maxLength)
      })
    }
  }

  class AutoComplete {

    constructor (userOptions = {}) {

      if (!$ || !$.prototype.select2) throw new Error('Dependencies "jquery" or "select2" not found!')
      if (!userOptions.selector) throw new Error('Option "selector" Required!')
      if (!userOptions.url) throw new Error('Option "url" Required!')

      if (userOptions.processParams) {
        userOptions.ajax = userOptions.ajax || {}
        userOptions.ajax.data = userOptions.processParams
      }

      this.options = $.extend({}, DEFAULT_OPTIONS, userOptions)
      this.options.ajax.url = userOptions.url

      this.$element = $(this.options.selector)
      this.$instance = initSelect2.call(this)

      addMaxLength.call(this)
      addResetListener.call(this)

    }

  }

  AUI.add('ent-auto-complete', (A) => {
    A.AutoComplete = AutoComplete
  }, '2.0.7', {
    'requires': []
  })

})(window.AUI || window.YUI, window.$)
