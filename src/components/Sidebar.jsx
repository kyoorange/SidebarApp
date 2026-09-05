export default function Sidebar({ isOpen, onToggle }) {
    return (
        <aside
            className={
                `sidebar-root ${isOpen ? 'sidebar-open' : 'sidebar-closed'
                }`}
        >
            <div className="sidebar-header">
                <button
                    type="button"
                    className="sidebar-toggle"
                    onClick={onToggle}
                    aria-label={isOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
                    aria-expanded={isOpen}
                >
                    ☰
                </button>

                <div className="sidebar-title">
                    SidebarApp
                </div>
            </div>

            <nav className="sidebar-nav">
                <a href="/" className="sidebar-item">
                    <span className="sidebar-icon" aria-hidden="true">⌂</span>
                    <span className="sidebar-label">ホーム</span>
                </a>
            </nav>
        </aside>
    )
}
