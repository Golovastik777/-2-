(function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            color-scheme: light dark;
            --ocean-bg-top: #021526;          /* deep midnight blue */
            --ocean-bg-mid: #033a53;          /* abyss teal */
            --ocean-bg-bottom: #046c8c;       /* pelagic cyan */
            --ocean-card: rgba(7, 22, 33, 0.55);
            --ocean-card-border: rgba(71, 191, 223, 0.18);
            --ocean-text: #e6f7ff;
            --ocean-muted: #9fd3e6;
            --ocean-accent: #39c5dc;         /* bright aqua */
            --ocean-accent-strong: #1fb0cc;   /* pressed state */
            --ocean-pill: rgba(3, 66, 92, 0.65);
            --ocean-input: rgba(5, 31, 45, 0.7);
            --ocean-input-border: rgba(76, 193, 219, 0.25);
            --ocean-warning: #f59e0b;
            --ocean-danger: #ef4444;
            --ring: 0 0 0 3px rgba(57, 197, 220, 0.28);
        }
        * { box-sizing: border-box; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
            color: var(--ocean-text);
            background:
                radial-gradient(1200px 500px at 80% -10%, rgba(57, 197, 220, 0.25), transparent 60%),
                radial-gradient(900px 600px at -10% 20%, rgba(2, 117, 141, 0.35), transparent 70%),
                linear-gradient(180deg, var(--ocean-bg-top), var(--ocean-bg-mid) 45%, var(--ocean-bg-bottom));
            position: relative;
            overflow-x: hidden;
        }
        body::before {
            content: "";
            position: fixed;
            inset: -10% -10% auto -10%;
            height: 220px;
            background:
                radial-gradient(100% 120% at 50% 0%, rgba(255,255,255,0.06), rgba(255,255,255,0) 70%),
                repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 2px, rgba(255,255,255,0) 2px 10px);
            transform: translate3d(0,0,0);
            pointer-events: none;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
        }
        .container { max-width: 980px; margin: 0 auto; padding: 22px 16px 32px; display: flex; flex-direction: column; gap: 16px; }
        header { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        h1 { font-size: 28px; margin: 0; letter-spacing: 0.5px; text-shadow: 0 1px 0 rgba(0,0,0,0.4); }
        .controls { display: grid; grid-template-columns: 1fr; gap: 10px; width: 100%; }
        .row { display: flex; gap: 10px; flex-wrap: wrap; }
        .field { display: flex; flex: 1 1 240px; min-width: 220px; gap: 6px; align-items: center; }
        label { font-size: 13px; color: var(--ocean-muted); }
        input[type="text"], input[type="date"], select {
            width: 100%; padding: 12px 14px; border-radius: 12px;
            border: 1px solid var(--ocean-input-border);
            background: var(--ocean-input);
            color: var(--ocean-text);
            outline: none;
            backdrop-filter: blur(6px);
            transition: border-color .2s ease, box-shadow .2s ease, transform .06s ease;
        }
        input[type="text"]:focus, input[type="date"]:focus, select:focus { box-shadow: var(--ring); border-color: var(--ocean-accent); }
        input[type="text"]::placeholder { color: rgba(159, 211, 230, 0.7); }
        button {
            padding: 11px 16px; border-radius: 12px; border: 1px solid var(--ocean-input-border);
            background: linear-gradient(180deg, rgba(7,42,58,0.7), rgba(4,28,40,0.7));
            color: var(--ocean-text); cursor: pointer; white-space: nowrap;
            transition: transform .06s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
            backdrop-filter: blur(6px);
        }
        button:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(0,0,0,0.3); border-color: rgba(57, 197, 220, 0.35); }
        button:active { transform: translateY(0); }
        button.primary { background: linear-gradient(180deg, var(--ocean-accent), var(--ocean-accent-strong)); border-color: var(--ocean-accent-strong); color: #00242c; font-weight: 600; text-shadow: 0 1px 0 rgba(255,255,255,0.2); }
        button.ghost { background: linear-gradient(180deg, rgba(8,49,67,0.45), rgba(4,28,40,0.45)); }
        button.danger { background: linear-gradient(180deg, rgba(239,68,68,0.9), rgba(200,44,44,0.9)); border-color: rgba(239,68,68,0.9); }
        button.warning { background: linear-gradient(180deg, rgba(245,158,11,0.9), rgba(217,119,6,0.9)); border-color: rgba(245,158,11,0.9); }
        button:disabled { opacity: 0.55; cursor: not-allowed; }
        .list { display: flex; flex-direction: column; gap: 10px; }
        .item {
            display: grid; grid-template-columns: 28px 1fr auto; gap: 12px; align-items: center; padding: 12px 14px;
            background: var(--ocean-card);
            border: 1px solid var(--ocean-card-border);
            border-radius: 14px; position: relative; overflow: hidden;
            box-shadow: 0 6px 26px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.03);
            transition: transform .08s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .item::after {
            content: ""; position: absolute; inset: -10% -10% auto -10%; height: 40%;
            background: linear-gradient(180deg, rgba(57,197,220,0.08), transparent);
            pointer-events: none;
        }
        .item:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,0.35); border-color: rgba(71, 191, 223, 0.35); }
        .item.dragging { opacity: 0.6; }
        .title { font-size: 16px; letter-spacing: 0.2px; }
        .title.completed { text-decoration: line-through; opacity: 0.7; }
        .meta { display: flex; gap: 8px; font-size: 12px; color: var(--ocean-muted); }
        .actions { display: flex; gap: 6px; }
        .empty { opacity: 0.85; text-align: center; padding: 28px; border: 1px dashed var(--ocean-card-border); border-radius: 14px; background: rgba(7,22,33,0.35); }
        .pill { font-size: 11px; padding: 4px 10px; border-radius: 999px; border: 1px solid var(--ocean-card-border); background: var(--ocean-pill); color: var(--ocean-text); }
        .editable { width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--ocean-input-border); background: rgba(5, 31, 45, 0.8); color: var(--ocean-text); }
        .toolbar { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .hint { font-size: 12px; color: var(--ocean-muted); }
        .stats { font-size: 12px; color: var(--ocean-muted); display: flex; gap: 10px; }
        .spacer { flex: 1 1 auto; }
        @media (min-width: 700px) {
            .controls { grid-template-columns: 1fr; }
            .row.wrap { flex-wrap: nowrap; }
        }
    `;
    document.head.appendChild(style);
})();

(function main() {
    /** @typedef {{id:string,title:string,dueDate:string,completed:boolean,order:number}} Task */

    /** @type {Task[]} */
    let tasks = [];
    let filterStatus = 'all'; 
    let sortMode = 'manual'; 
    let searchQuery = '';

    const STORAGE_KEY = 'todo.tasks.v1';
    const STORAGE_VIEW_KEY = 'todo.view.v1';

    const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
    const save = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        localStorage.setItem(STORAGE_VIEW_KEY, JSON.stringify({ filterStatus, sortMode, searchQuery }));
    };
    const load = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) tasks = JSON.parse(raw);
        } catch {}
        try {
            const rawView = localStorage.getItem(STORAGE_VIEW_KEY);
            if (rawView) {
                const v = JSON.parse(rawView);
                filterStatus = v.filterStatus || 'all';
                sortMode = v.sortMode || 'manual';
                searchQuery = v.searchQuery || '';
            }
        } catch {}
    };

    const root = document.createElement('div');
    root.className = 'container';
    document.body.appendChild(root);

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'ToDo-лист';
    const toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    const hint = document.createElement('div');
    hint.className = 'hint';
    hint.textContent = 'Подсказка: перетаскивайте задачи в режиме «Ручной порядок»';
    const toolbarSpacer = document.createElement('div');
    toolbarSpacer.className = 'spacer';
    const stats = document.createElement('div');
    stats.className = 'stats';
    stats.setAttribute('aria-live', 'polite');
    toolbar.append(hint, toolbarSpacer, stats);
    header.append(title, toolbar);
    root.appendChild(header);

    const controls = document.createElement('section');
    controls.className = 'controls';

    const addRow = document.createElement('div');
    addRow.className = 'row wrap';

    const fieldTitle = document.createElement('div');
    fieldTitle.className = 'field';
    const labelTitle = document.createElement('label');
    labelTitle.textContent = 'Название';
    labelTitle.setAttribute('for', 'title');
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title';
    inputTitle.placeholder = 'Например: Купить молоко';
    fieldTitle.append(labelTitle, inputTitle);

    const fieldDate = document.createElement('div');
    fieldDate.className = 'field';
    const labelDate = document.createElement('label');
    labelDate.textContent = 'Срок';
    labelDate.setAttribute('for', 'due');
    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'due';
    fieldDate.append(labelDate, inputDate);

    const addBtn = document.createElement('button');
    addBtn.className = 'primary';
    addBtn.textContent = 'Добавить';
    function addCurrentTask() {
        const t = inputTitle.value.trim();
        const d = inputDate.value || '';
        if (!t) return;
        const maxOrder = tasks.length ? Math.max(...tasks.map(x => x.order || 0)) : 0;
        tasks.push({ id: uid(), title: t, dueDate: d, completed: false, order: maxOrder + 1 });
        inputTitle.value = '';
        inputDate.value = '';
        save();
        render();
        inputTitle.focus();
    }
    addBtn.addEventListener('click', addCurrentTask);
    inputTitle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addCurrentTask();
        }
    });

    addRow.append(fieldTitle, fieldDate, addBtn);

    const fssRow = document.createElement('div');
    fssRow.className = 'row wrap';

    const fieldFilter = document.createElement('div');
    fieldFilter.className = 'field';
    const labelFilter = document.createElement('label');
    labelFilter.textContent = 'Статус';
    labelFilter.setAttribute('for', 'filter');
    const selectFilter = document.createElement('select');
    selectFilter.id = 'filter';
    selectFilter.innerHTML = `
        <option value="all">Все</option>
        <option value="active">Невыполнено</option>
        <option value="completed">Выполнено</option>
    `;
    selectFilter.value = filterStatus;
    selectFilter.addEventListener('change', () => {
        filterStatus = selectFilter.value;
        save();
        render();
    });
    fieldFilter.append(labelFilter, selectFilter);

    const fieldSort = document.createElement('div');
    fieldSort.className = 'field';
    const labelSort = document.createElement('label');
    labelSort.textContent = 'Сортировка';
    labelSort.setAttribute('for', 'sort');
    const selectSort = document.createElement('select');
    selectSort.id = 'sort';
    selectSort.innerHTML = `
        <option value="manual">Ручной порядок</option>
        <option value="dateAsc">Дата: по возрастанию</option>
        <option value="dateDesc">Дата: по убыванию</option>
    `;
    selectSort.value = sortMode;
    selectSort.addEventListener('change', () => {
        sortMode = selectSort.value;
        save();
        render();
    });
    fieldSort.append(labelSort, selectSort);

    // Search
    const fieldSearch = document.createElement('div');
    fieldSearch.className = 'field';
    const labelSearch = document.createElement('label');
    labelSearch.textContent = 'Поиск';
    labelSearch.setAttribute('for', 'search');
    const inputSearch = document.createElement('input');
    inputSearch.type = 'text';
    inputSearch.id = 'search';
    inputSearch.placeholder = 'Поиск по названию...';
    inputSearch.value = searchQuery;
    function debounce(fn, delay) {
        let t = null;
        return function(...args) {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(this, args), delay);
        };
    }
    const handleSearch = debounce(() => {
        searchQuery = inputSearch.value.trim();
        save();
        render();
    }, 200);
    inputSearch.addEventListener('input', handleSearch);
    fieldSearch.append(labelSearch, inputSearch);

    const bulkRow = document.createElement('div');
    bulkRow.className = 'row wrap';

    const clearCompletedBtn = document.createElement('button');
    clearCompletedBtn.className = 'warning';
    clearCompletedBtn.textContent = 'Очистить выполненные';
    clearCompletedBtn.addEventListener('click', () => {
        const count = tasks.filter(t => t.completed).length;
        if (count === 0) return;
        if (!confirm(`Удалить ${count} выполненных задач?`)) return;
        tasks = tasks.filter(t => !t.completed);
        // reindex order to keep it tidy
        tasks.sort((a,b) => (a.order||0)-(b.order||0)).forEach((t,i)=> t.order = i+1);
        save();
        render();
    });

    const deleteAllBtn = document.createElement('button');
    deleteAllBtn.className = 'danger';
    deleteAllBtn.textContent = 'Удалить все';
    deleteAllBtn.addEventListener('click', () => {
        if (tasks.length === 0) return;
        if (!confirm('Точно удалить все задачи? Это действие необратимо.')) return;
        tasks = [];
        save();
        render();
    });

    const exportBtn = document.createElement('button');
    exportBtn.className = 'ghost';
    exportBtn.textContent = 'Экспорт JSON';
    exportBtn.addEventListener('click', () => {
        const payload = { tasks, view: { filterStatus, sortMode, searchQuery } };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todo-export.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    });

    const importBtn = document.createElement('button');
    importBtn.className = 'ghost';
    importBtn.textContent = 'Импорт JSON';
    const importInput = document.createElement('input');
    importInput.type = 'file';
    importInput.accept = 'application/json';
    importInput.style.display = 'none';
    importBtn.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', () => {
        const file = importInput.files && importInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(String(reader.result || '{}'));
                if (!Array.isArray(data.tasks)) throw new Error('Неверный формат файла');
                tasks = data.tasks.map(t => ({
                    id: String(t.id || uid()),
                    title: String(t.title || ''),
                    dueDate: t.dueDate ? String(t.dueDate) : '',
                    completed: Boolean(t.completed),
                    order: Number(t.order || 0)
                }));
                if (data.view) {
                    filterStatus = ['all','active','completed'].includes(data.view.filterStatus) ? data.view.filterStatus : 'all';
                    sortMode = ['manual','dateAsc','dateDesc'].includes(data.view.sortMode) ? data.view.sortMode : 'manual';
                    searchQuery = String(data.view.searchQuery || '');
                    selectFilter.value = filterStatus;
                    selectSort.value = sortMode;
                    inputSearch.value = searchQuery;
                }
                save();
                render();
                alert('Импорт выполнен');
            } catch (e) {
                alert('Ошибка импорта: ' + (e && e.message ? e.message : 'неизвестная'));
            } finally {
                importInput.value = '';
            }
        };
        reader.readAsText(file);
    });

    bulkRow.append(clearCompletedBtn, deleteAllBtn, exportBtn, importBtn, importInput);

    fssRow.append(fieldFilter, fieldSort, fieldSearch);

    controls.append(addRow, fssRow, bulkRow);
    root.appendChild(controls);

    // List container
    const list = document.createElement('section');
    list.className = 'list';
    root.appendChild(list);

    // Render helpers
    function sortTasks(view) {
        if (sortMode === 'dateAsc') {
            return [...view].sort((a, b) => (a.dueDate || '').localeCompare(b.dueDate || ''));
        }
        if (sortMode === 'dateDesc') {
            return [...view].sort((a, b) => (b.dueDate || '').localeCompare(a.dueDate || ''));
        }
        return [...view].sort((a, b) => (a.order || 0) - (b.order || 0));
    }

    function filteredTasks() {
        let view = tasks;
        if (filterStatus === 'active') view = view.filter(t => !t.completed);
        else if (filterStatus === 'completed') view = view.filter(t => t.completed);
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            view = view.filter(t => t.title.toLowerCase().includes(q));
        }
        return sortTasks(view);
    }

    function render() {
        list.innerHTML = '';
        const view = filteredTasks();
        updateStats();

        if (view.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'empty';
            empty.textContent = 'Список пуст. Добавьте первую задачу!';
            list.appendChild(empty);
            return;
        }

        view.forEach(task => list.appendChild(renderItem(task)));
        setupDragAndDrop();
    }

    function updateStats() {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const active = total - completed;
        const fragments = [
            `Все: ${total}`,
            `Активные: ${active}`,
            `Выполненные: ${completed}`
        ];
        const text = fragments.join(' · ');
        const statsEl = header.querySelector('.stats');
        if (statsEl) statsEl.textContent = text;
    }

    function renderItem(task) {
        const el = document.createElement('div');
        el.className = 'item';
        el.draggable = sortMode === 'manual';
        el.dataset.id = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            save();
            render();
        });

        const content = document.createElement('div');
        const titleEl = document.createElement('div');
        titleEl.className = 'title' + (task.completed ? ' completed' : '');
        titleEl.textContent = task.title;

        const meta = document.createElement('div');
        meta.className = 'meta';
        const datePill = document.createElement('span');
        datePill.className = 'pill';
        datePill.textContent = task.dueDate ? `Срок: ${task.dueDate}` : 'Без срока';
        const statusPill = document.createElement('span');
        statusPill.className = 'pill';
        statusPill.textContent = task.completed ? 'Выполнено' : 'Невыполнено';
        meta.append(datePill, statusPill);

        content.append(titleEl, meta);

        const actions = document.createElement('div');
        actions.className = 'actions';
        const editBtn = document.createElement('button');
        editBtn.className = 'ghost';
        editBtn.textContent = 'Редактировать';
        editBtn.addEventListener('click', () => startEdit(el, task));

        const delBtn = document.createElement('button');
        delBtn.className = 'ghost';
        delBtn.textContent = 'Удалить';
        delBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            save();
            render();
        });

        actions.append(editBtn, delBtn);

        el.append(checkbox, content, actions);
        return el;
    }

    function startEdit(container, task) {
        container.innerHTML = '';
        container.draggable = false;

        const spacer = document.createElement('div');
        const left = document.createElement('div');
        left.style.display = 'flex';

        const form = document.createElement('div');
        form.style.display = 'grid';
        form.style.gridTemplateColumns = '1fr 180px auto auto';
        form.style.gap = '8px';
        form.style.width = '100%';

        const inputT = document.createElement('input');
        inputT.className = 'editable';
        inputT.type = 'text';
        inputT.value = task.title;

        const inputD = document.createElement('input');
        inputD.className = 'editable';
        inputD.type = 'date';
        inputD.value = task.dueDate || '';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'primary';
        saveBtn.textContent = 'Сохранить';
        saveBtn.addEventListener('click', () => {
            const t = inputT.value.trim();
            if (!t) return;
            task.title = t;
            task.dueDate = inputD.value || '';
            save();
            render();
        });

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'ghost';
        cancelBtn.textContent = 'Отмена';
        cancelBtn.addEventListener('click', () => render());

        form.append(inputT, inputD, saveBtn, cancelBtn);
        container.append(spacer, form, left);
        inputT.focus();
    }

    function setupDragAndDrop() {
        if (sortMode !== 'manual') return;
        const items = Array.from(list.querySelectorAll('.item'));
        let draggingEl = null;

        items.forEach(el => {
            el.addEventListener('dragstart', (e) => {
                draggingEl = el;
                el.classList.add('dragging');
                e.dataTransfer?.setData('text/plain', el.dataset.id || '');
                e.dataTransfer?.setDragImage(new Image(), 0, 0);
            });
            el.addEventListener('dragend', () => {
                el.classList.remove('dragging');
                draggingEl = null;
            });
            el.addEventListener('dragover', (e) => {
                e.preventDefault();
                const target = el;
                if (!draggingEl || draggingEl === target) return;
                const rect = target.getBoundingClientRect();
                const before = (e.clientY - rect.top) / rect.height < 0.5;
                if (before) list.insertBefore(draggingEl, target);
                else list.insertBefore(draggingEl, target.nextSibling);
            });
        });

        list.addEventListener('drop', () => {
            const ids = Array.from(list.querySelectorAll('.item')).map(el => el.dataset.id);
            const idToTask = new Map(tasks.map(t => [t.id, t]));
            ids.forEach((id, idx) => {
                const t = idToTask.get(id);
                if (t) t.order = idx + 1;
            });
            save();
            render();
        }, { once: true });
    }

    load();
    render();
})();


