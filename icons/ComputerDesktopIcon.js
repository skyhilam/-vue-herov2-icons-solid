export default {
  name: 'ComputerDesktopIcon',
  
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.25C2.25 3.59315 3.59315 2.25 5.25 2.25H18.75C20.4069 2.25 21.75 3.59315 21.75 5.25V15C21.75 16.6569 20.4069 18 18.75 18H15.75V18.2574C15.75 18.8541 15.9871 19.4264 16.409 19.8483L17.0303 20.4697C17.2448 20.6842 17.309 21.0068 17.1929 21.287C17.0768 21.5673 16.8033 21.75 16.5 21.75H7.5C7.19665 21.75 6.92318 21.5673 6.80709 21.287C6.691 21.0068 6.75517 20.6842 6.96967 20.4697L7.59099 19.8483C8.01295 19.4264 8.25 18.8541 8.25 18.2574V18H5.25C3.59315 18 2.25 16.6569 2.25 15V5.25ZM3.75 5.25V12.75C3.75 13.5784 4.42157 14.25 5.25 14.25H18.75C19.5784 14.25 20.25 13.5784 20.25 12.75V5.25C20.25 4.42157 19.5784 3.75 18.75 3.75H5.25C4.42157 3.75 3.75 4.42157 3.75 5.25Z" fill="#0F172A"/>
</svg>

  }
}