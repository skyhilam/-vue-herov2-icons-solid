export default {
  name: 'PencilIcon',
  
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
<path d="M21.7312 2.26884C20.706 1.24372 19.044 1.24372 18.0189 2.26884L16.8617 3.426L20.574 7.13831L21.7312 5.98116C22.7563 4.95603 22.7563 3.29397 21.7312 2.26884Z" fill="#0F172A"/>
<path d="M19.5134 8.19897L15.801 4.48666L3.65021 16.6375C3.03342 17.2543 2.58003 18.015 2.33101 18.851L1.53123 21.5359C1.45261 21.7998 1.52496 22.0856 1.71969 22.2803C1.91442 22.4751 2.2002 22.5474 2.46413 22.4688L5.14902 21.669C5.98499 21.42 6.74574 20.9666 7.36253 20.3498L19.5134 8.19897Z" fill="#0F172A"/>
</svg>

  }
}