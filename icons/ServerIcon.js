export default {
  name: 'ServerIcon',
  
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';

    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...ctx.data}>
<path d="M4.07993 5.22701C4.43013 3.91375 5.61948 3 6.97863 3H17.0214C18.3805 3 19.5699 3.91375 19.9201 5.22701L22.0338 13.1535C21.1346 12.4318 19.9927 12 18.75 12H5.25C4.00727 12 2.86538 12.4318 1.96619 13.1535L4.07993 5.22701Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 13.5C3.17893 13.5 1.5 15.1789 1.5 17.25C1.5 19.3211 3.17893 21 5.25 21H18.75C20.8211 21 22.5 19.3211 22.5 17.25C22.5 15.1789 20.8211 13.5 18.75 13.5H5.25ZM15.75 18C16.1642 18 16.5 17.6642 16.5 17.25C16.5 16.8358 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.8358 15 17.25C15 17.6642 15.3358 18 15.75 18ZM19.5 17.25C19.5 17.6642 19.1642 18 18.75 18C18.3358 18 18 17.6642 18 17.25C18 16.8358 18.3358 16.5 18.75 16.5C19.1642 16.5 19.5 16.8358 19.5 17.25Z" fill="#0F172A"/>
</svg>

  }
}