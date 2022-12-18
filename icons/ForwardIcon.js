export default {
  name: 'ForwardIcon',
  
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
<path d="M5.05526 7.06036C3.80528 6.34609 2.25 7.24865 2.25 8.68832V16.8112C2.25 18.2508 3.80528 19.1534 5.05526 18.4391L12 14.4707V16.8112C12 18.2508 13.5553 19.1534 14.8053 18.4391L21.9128 14.3777C23.1724 13.6579 23.1724 11.8416 21.9128 11.1218L14.8053 7.06036C13.5553 6.34609 12 7.24865 12 8.68832V11.0288L5.05526 7.06036Z" fill="#0F172A"/>
</svg>

  }
}