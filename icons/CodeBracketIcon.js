export default {
  name: 'CodeBracketIcon',
  
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4473 3.02662C14.847 3.1356 15.0826 3.54791 14.9736 3.94753L10.4736 20.4475C10.3646 20.8471 9.95228 21.0827 9.55266 20.9738C9.15304 20.8648 8.91744 20.4525 9.02643 20.0529L13.5264 3.55285C13.6354 3.15323 14.0477 2.91763 14.4473 3.02662ZM16.7197 6.21986C17.0126 5.92696 17.4874 5.92696 17.7803 6.21986L23.0303 11.4699C23.3232 11.7628 23.3232 12.2376 23.0303 12.5305L17.7803 17.7805C17.4874 18.0734 17.0126 18.0734 16.7197 17.7805C16.4268 17.4876 16.4268 17.0128 16.7197 16.7199L21.4393 12.0002L16.7197 7.28052C16.4268 6.98762 16.4268 6.51275 16.7197 6.21986ZM7.28033 6.21986C7.57322 6.51275 7.57322 6.98763 7.28033 7.28052L2.56066 12.0002L7.28033 16.7199C7.57322 17.0128 7.57322 17.4876 7.28033 17.7805C6.98744 18.0734 6.51256 18.0734 6.21967 17.7805L0.96967 12.5305C0.676777 12.2376 0.676777 11.7628 0.96967 11.4699L6.21967 6.21986C6.51256 5.92697 6.98744 5.92697 7.28033 6.21986Z" fill="#0F172A"/>
</svg>

  }
}