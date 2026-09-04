import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * WebGL can fail for reasons entirely outside our control (disabled GPU,
 * blocked context, old browser). This boundary makes that a silent no-op
 * rather than a broken hero section.
 */
class CanvasBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('3D scene disabled — falling back to static hero.', error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default CanvasBoundary;
