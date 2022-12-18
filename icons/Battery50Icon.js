export default {
  name: 'Battery50Icon',
  
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
<path d="M4.5 9.75C4.08579 9.75 3.75 10.0858 3.75 10.5V15C3.75 15.4142 4.08579 15.75 4.5 15.75H11.25C11.6642 15.75 12 15.4142 12 15V10.5C12 10.0858 11.6642 9.75 11.25 9.75H4.5Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 6.75C2.09315 6.75 0.75 8.09315 0.75 9.75V15.75C0.75 17.4069 2.09315 18.75 3.75 18.75H18.75C20.4069 18.75 21.75 17.4069 21.75 15.75V15.7125C22.6058 15.5388 23.25 14.7821 23.25 13.875V11.625C23.25 10.7179 22.6058 9.96123 21.75 9.78751V9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H3.75ZM18.75 8.25C19.5784 8.25 20.25 8.92157 20.25 9.75V15.75C20.25 16.5784 19.5784 17.25 18.75 17.25H3.75C2.92157 17.25 2.25 16.5784 2.25 15.75V9.75C2.25 8.92157 2.92157 8.25 3.75 8.25H18.75Z" fill="#0F172A"/>
</svg>

  }
}