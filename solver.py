import sympy as sp

def solve_math(problem):
    try:
        expr = sp.sympify(problem)
        solution = sp.simplify(expr)
        return str(solution)
    except Exception as e:
        return f"Error: {str(e)}"

import sympy as sp