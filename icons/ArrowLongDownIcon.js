export default {
  name: 'ArrowLongDownIcon',
  
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3L12.75 19.1893L15.2197 16.7197C15.5126 16.4268 15.9874 16.4268 16.2803 16.7197C16.5732 17.0126 16.5732 17.4874 16.2803 17.7803L12.5303 21.5303C12.2374 21.8232 11.7626 21.8232 11.4697 21.5303L7.71967 17.7803C7.42678 17.4874 7.42678 17.0126 7.71967 16.7197C8.01256 16.4268 8.48744 16.4268 8.78033 16.7197L11.25 19.1893L11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#0F172A"/>
</svg>

  }
}