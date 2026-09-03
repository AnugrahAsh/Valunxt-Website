# data/

Runtime files the site writes, never served over HTTP.

| File                    | Written by                    |
| ----------------------- | ----------------------------- |
| `form-submissions.log`  | `src/app/form-handler/route.ts` — every form submission, one JSON object per line |
| `form-errors.log`       | the same route, when the database insert fails |

Nothing here is read at render time. The content that used to live in this
folder as PHP has moved into the source tree so it is typed and versioned:

| Was                       | Is now                        |
| ------------------------- | ----------------------------- |
| `data/seo/seo-map.php`    | `src/data/seo-map.json` (rewritten by the admin panel on save) |
| `data/leadership.php`     | `src/data/leadership.ts`      |
| `data/testimonials.php`   | `src/data/testimonials.ts`    |
| `data/track-record.php`   | `src/data/track-record.ts`    |
