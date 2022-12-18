export default {
  name: 'PhotoIcon',
  
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6C1.5 4.75736 2.50736 3.75 3.75 3.75H20.25C21.4926 3.75 22.5 4.75736 22.5 6V18C22.5 19.2426 21.4926 20.25 20.25 20.25H3.75C2.50736 20.25 1.5 19.2426 1.5 18V6ZM3 16.0607V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V16.0607L18.3107 13.3713C17.7249 12.7855 16.7751 12.7855 16.1893 13.3713L15.3107 14.25L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L10.0607 11.1213C9.47487 10.5355 8.52513 10.5355 7.93934 11.1213L3 16.0607ZM13.125 8.25C13.125 7.62868 13.6287 7.125 14.25 7.125C14.8713 7.125 15.375 7.62868 15.375 8.25C15.375 8.87132 14.8713 9.375 14.25 9.375C13.6287 9.375 13.125 8.87132 13.125 8.25Z" fill="#0F172A"/>
</svg>

  }
}