export default {
  name: 'UserMinusIcon',
  
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
<path d="M10.375 2.25C8.09683 2.25 6.25 4.09683 6.25 6.375C6.25 8.65317 8.09683 10.5 10.375 10.5C12.6532 10.5 14.5 8.65317 14.5 6.375C14.5 4.09683 12.6532 2.25 10.375 2.25Z" fill="#0F172A"/>
<path d="M10.375 12C6.43997 12 3.25 15.19 3.25 19.125C3.25 19.1657 3.25034 19.2064 3.25103 19.2469C3.25537 19.5054 3.39256 19.7435 3.61406 19.8768C5.5893 21.0661 7.90343 21.75 10.375 21.75C12.8466 21.75 15.1607 21.0661 17.1359 19.8768C17.3574 19.7435 17.4946 19.5054 17.499 19.2469C17.4996 19.2074 17.5 19.1674 17.5 19.1276V19.125C17.5 15.19 14.31 12 10.375 12Z" fill="#0F172A"/>
<path d="M16 9.75C15.5858 9.75 15.25 10.0858 15.25 10.5C15.25 10.9142 15.5858 11.25 16 11.25H22C22.4142 11.25 22.75 10.9142 22.75 10.5C22.75 10.0858 22.4142 9.75 22 9.75H16Z" fill="#0F172A"/>
</svg>

  }
}