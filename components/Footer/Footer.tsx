import s from './style.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`${s.fluid} fluid`}>
        <p>{'Made with ❤️ by Example'}</p>
      </div>
    </footer>
  )
}

export default Footer