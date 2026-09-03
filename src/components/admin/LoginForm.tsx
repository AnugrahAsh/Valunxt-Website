'use client';

/**
 * The sign-in form.
 *
 * A client component only because of the show/hide password toggle and the
 * pending state — the submit itself is a Server Action, so the form still works
 * with JavaScript disabled.
 *
 * Port of the form half of admin/index.php.
 */
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';

import { loginAction } from '@/lib/admin/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending}>
      {pending ? 'Signing in…' : 'Sign in'}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}

export default function LoginForm({
  defaultEmail,
  defaultPassword,
}: {
  defaultEmail: string;
  defaultPassword: string;
}) {
  const [state, action] = useActionState(loginAction, null);
  const [show, setShow] = useState(false);
  const error = state?.error ?? '';

  return (
    <>
      {error ? (
        <div className="alert alert-error" role="alert">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </div>
      ) : null}

      <form action={action} noValidate>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <div className="input-shell">
            <span className="lead-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
              defaultValue={String(state?.email ?? defaultEmail)}
              placeholder="you@valunxtcapital.com"
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="input-shell has-toggle">
            <span className="lead-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              type={show ? 'text' : 'password'}
              id="password"
              name="password"
              autoComplete="current-password"
              defaultValue={defaultPassword}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="toggle-eye"
              id="togglePw"
              aria-label={show ? 'Hide password' : 'Show password'}
              aria-pressed={show}
              onClick={() => setShow((v) => !v)}
            >
              <svg
                className="eye-open"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: show ? 'none' : undefined }}
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <svg
                className="eye-off"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: show ? undefined : 'none' }}
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            </button>
          </div>
        </div>

        <div className="form-row">
          <label className="remember">
            <input type="checkbox" name="remember" value="1" /> Remember me
          </label>
          <a href="#" className="forgot">
            Forgot password?
          </a>
        </div>

        <SubmitButton />
      </form>
    </>
  );
}
